#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MessageAPI.Models;
using MessageAPI.Models.DTO;

namespace MessageAPI.Controllers;

[Route("api/message")]
[ApiController]
public class MessageItemController : ControllerBase
{
    private readonly MessageContext _context;
    private readonly ILogger<MessageItemController> _logger;

    public MessageItemController(MessageContext context, ILogger<MessageItemController> logger)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    /// <summary>
    /// Gets all messages
    /// </summary>
    /// <returns>A response with the list of messages</returns>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<MessageItemDTO>>> GetMessageItems()
    {
        var messageItems = await _context.MessageItems.ToListAsync();
        var messageItemDtos = new MessageItemDTO[messageItems.Count];
        for (int i = 0; i < messageItems.Count; i++)
        {
            messageItemDtos[i] = new MessageItemDTO
                { Id = messageItems[i].Id, MainMessage = messageItems[i].MainMessage };
        }

        return messageItemDtos;
    }

    /// <summary>
    /// Gets a single message
    /// </summary>
    /// <param name="id">The ID of the message to return</param>
    /// <returns>The message with that ID, or a 404 response if the message does not exist</returns>
    [HttpGet("{id}")]
    public async Task<ActionResult<MessageItemDTO>> GetMessageItem(int id)
    {
        var messageItem = await _context.MessageItems.FindAsync(id);

        if (messageItem == null)
        {
            return NotFound();
        }

        // Strip out the password
        var messageItemDto = new MessageItemDTO { Id = messageItem.Id, MainMessage = messageItem.MainMessage };

        return messageItemDto;
    }

    /// <summary>
    /// Updates the message if it exists
    /// </summary>
    /// <param name="id">The message to update</param>
    /// <param name="messageUpdateDto">The request body</param>
    /// <param name="password">The password associated with the message</param>
    /// <returns>A 404 response if the message doesn't exist, or a 204 if it has been updated</returns>
    [HttpPatch("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public async Task<IActionResult> PatchMessageItem(int id, MessageUpdateDTO messageUpdateDto,
        [FromHeader(Name = "password")] string password)
    {
        _logger.LogInformation("Password: {Password}", password);

        // If the password doesn't match the old message password, return bad request.
        var oldMessageItem = await _context.MessageItems.FindAsync(id);
        if (oldMessageItem is null) return BadRequest();

        if (password != oldMessageItem.Password)
        {
            return Unauthorized();
        }

        oldMessageItem.MainMessage = messageUpdateDto.MainMessage;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    /// <summary>
    /// Creates a new message
    /// </summary>
    /// <param name="messageItem">The new message item to create</param>
    /// <returns>a success code if the message has been created</returns>
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<ActionResult<MessageItem>> PostMessageItem(MessageItem messageItem)
    {
        _context.MessageItems.Add(messageItem);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetMessageItem), new { id = messageItem.Id }, messageItem);
    }

    /// <summary>
    /// Deletes a message if it exists
    /// </summary>
    /// <param name="id">The ID of the message to delete</param>
    /// <returns>A 200 OK response</returns>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMessageItem(int id)
    {
        var messageItem = await _context.MessageItems.FindAsync(id);
        if (messageItem is null)
        {
            // if we return not found, people who shouldn't know a message exists can find
            // a message's existence from the response type
            return Ok();
        }

        _context.MessageItems.Remove(messageItem);
        await _context.SaveChangesAsync();

        return Ok();
    }
}