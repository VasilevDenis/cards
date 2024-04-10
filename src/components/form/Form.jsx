export default function Form({ handleSubmit, inputValue, handleChange }) {

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter a card number..." 
                value={inputValue} 
                onChange={handleChange}
            />
            <button type="submit">Check the number</button>
        </form>
    );
}
