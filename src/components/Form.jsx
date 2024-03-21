
function Form({ setName }) {

    const handleChange = (event) => {

        setName(event.target.value);
    }

    return (
        <>

            <form action="">
                <input type="text"
                    onChange={handleChange}
                />
            </form>


        </>
    )
}

export default Form