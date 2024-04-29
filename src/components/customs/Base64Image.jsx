const Base64Image = (props) => {
    const { data } = props;
    if (!data) {
        return;
    }
    return (
        <img alt="restaurantImage" {...props} src={`data:image/jpeg;base64,${data}`} />
    );
}

export default Base64Image