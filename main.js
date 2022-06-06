function delay(time)
{
    return new Promise(resolve => setTimeout(resolve, time));
}

function alertBox(text)
{
    let notify = document.getElementById("input-alert");

    notify.innerHTML = text;
    notify.style.display = "block";
    delay(2500);
}

function check()
{
    let variable = document.getElementById("input").value;

    if (variable == "")
    {
        alertBox("Oops! Looks like you forget a game ID.");
    } else {
        alertBox("Yay!");
    }
}