
const CustomButton = (props) => {
    const { style, type } = props;
    return (
        <button {...props} type={type} style={{ ...style }}>{props.children}</button>
    )
}

export default CustomButton