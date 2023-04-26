import Swal from "sweetalert2"

const ClearListButton = ({setListItems}) => {
    const clearList= async () => {
        const {isConfirmed}= await Swal.fire({
            title: "Are you sure",
            text: "You wont be able to revert this",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "yes, clear it!"
        });
        //console.log(value);
        if(isConfirmed){
            setListItems([])
            
        }
    }
    return (
        <button
        className="btn btn-outline-danger me-1"
        type="button"
        onClick={clearList}>

        <i className="bi bi-trash2"> </i>
        </button>
    )
}
export default ClearListButton;