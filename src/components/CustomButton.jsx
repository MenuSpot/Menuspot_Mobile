
const CustomButton = (props) => {
    const { style, type } = props;
    return (
        <button type={type} style={{ ...style, cursor: "pointer" }}>{props.children}</button>
    )
}

export default CustomButton