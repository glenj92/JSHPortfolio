import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function showAlert(msg, icon, foco = '') {
    onfocus(foco);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: msg,
        icon: icon
    });
}

export function showAlertDel(msg, icon, foco = '') {
    onfocus(foco);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: msg,
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: icon,
        //buttons: true,
        //dangerMode: true

    });
        //.then((willDelete) => {
        //    if (willDelete) {
        //        MySwal("Poof! Your imaginary file has been deleted!", {
        //            icon: "success",
        //        });
        //    } else {
        //        MySwal("Your imaginary file is safe!");
        //    }
        //});

}

function onfocus(foco) {
    if (foco !== '') {
        document.getElementById(foco).focus();
    }
}
