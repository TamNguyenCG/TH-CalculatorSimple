let check=false

function setOutput(number) {
    if (check) {
        document.getElementById('out-put').value = number;
        check = false;
    } else {
        document.getElementById('out-put').value += number;
    }
}
function calculator(){
        check=true;
        let output=document.getElementById('out-put').value;
        document.getElementById('out-put').value=eval(output);
}

function clearOutput(){
document.getElementById('out-put').value='';
}
/* Nút xóa số
function clearNumber() {
    let output = document.getElementById("out-put").value;
    document.getElementById("out-put").value = output.slice(0, -1);
}
 */