#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MessageAPI.Models;
using MessageAPI.Models.DTO;

namespace MessageAPI.Controllers
{
    [Route("api/message")]
    [ApiController]
    public class MessageItemController : ControllerBase
    {
        private readonly MessageContext _context;

        public MessageItemController(MessageContext context)
        {
            _context = context;
        }

        // GET: api/message
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MessageItemDTO>>> GetMessageItems()
        {
            var messageItems = await _context.MessageItems.ToListAsync();
            var messageItemDTOs = new MessageItemDTO[messageItems.Count];
            for (int i = 0; i < messageItems.Count; i++)
            {
                messageItemDTOs[i] = new MessageItemDTO { Id = messageItems[i].Id, MainMessage = messageItems[i].MainMessage };
            }
            return messageItemDTOs;
        }

        // GET: api/message/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MessageItemDTO>> GetMessageItem(int id)
        {
            var messageItem = await _context.MessageItems.FindAsync(id);
            // Strip out the password
            var messageItemDTO = new MessageItemDTO() { Id = messageItem.Id, MainMessage = messageItem.MainMessage };

            if (messageItem == null)
            {
                return NotFound();
            }

            return messageItemDTO;
        }

        // PUT: api/message/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchMessageItem(int id, MessageUpdateDTO messageUpdateDTO, [FromHeader(Name = "password")] string password)
        {
            Console.WriteLine(password);
            if (!MessageItemExists(id))
            {
                return BadRequest();
            }

            // If the password doesn't match the old message password, return bad request.
            var oldMessageItem = await _context.MessageItems.FindAsync(id);
            if (password != oldMessageItem.Password){
                return Unauthorized();
            }
            _context.ChangeTracker.Clear();
            oldMessageItem.MainMessage = messageUpdateDTO.MainMessage;
            _context.Entry(oldMessageItem).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/message
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MessageItem>> PostMessageItem(MessageItem messageItem)
        {
            _context.MessageItems.Add(messageItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMessageItem), new { id = messageItem.Id }, messageItem);
        }

        // DELETE: api/message/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessageItem(int id)
        {
            var messageItem = await _context.MessageItems.FindAsync(id);
            if (messageItem == null)
            {
                return NotFound();
            }

            // _context.MessageItems.Remove(messageItem);
            // await _context.SaveChangesAsync();

            return Ok();
        }

        private bool MessageItemExists(int id)
        {
            return _context.MessageItems.Any(e => e.Id == id);
        }
    }
}
