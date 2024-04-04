export default function Input(props:any) {
    return (
      <input
        {...props}
        value={props.inputValue}
        onChange={(e) => props.onInputChange(e.target.value)}
      />

    );
}