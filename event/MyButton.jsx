function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };

    return (
        <button onClick={(event) => handleDelete(1, event)}>
            
        </button>
    );
}
export default MyButton;