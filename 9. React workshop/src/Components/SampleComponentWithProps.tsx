import './SampleComponent.css'

interface IProps {
  value: string | number
}

function SampleComponentWithProps(props: IProps){
  /*
    A sample component with a property assigned.
    You can access this property via props.variable_name (props.value) in this case.
    A neat feature of typescript that allows enforcing data types in React.

    This component can be used by supplying this XML component.
    <SampleComponentWithProps value={'Hello'} />
    In this case value is our property.
  */
  return(
    <div className="SampleComponent">
      <h2>{`I have a current value "${props.value}" as a property assigned to me.`}</h2>
    </div>
  )
}

export default SampleComponentWithProps;