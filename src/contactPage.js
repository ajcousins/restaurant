const contactPage = () => {

    
    console.log("contact");

    const contentDiv = document.querySelector("#content");

    const heading = document.createElement("h2");
    heading.textContent = "Contact Us";
    contentDiv.appendChild(heading);

    const subHeading = document.createElement("h3");
    subHeading.textContent = "RESERVATIONS";
    contentDiv.appendChild(subHeading);

    const details = document.createElement("p");
    details.classList.add("details");
    details.innerHTML = "Monday to Saturday, 9.00am to 9.00pm<br>Sundays from 10.00am to 9.00pm<br>--<br>020 7251 0848<br>reservations@stjohnrestaurant.com"
    contentDiv.appendChild(details);


    const div = document.createElement("div");
    div.classList.add("contactContainer");
    contentDiv.appendChild(div);

    const map = document.createElement("iframe");
    map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6047622370206!2d-0.10251937832794043!3d51.52046673125472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5161b93317%3A0x86773f8e76f37d7!2sSt.%20John!5e0!3m2!1sen!2suk!4v1615228339442!5m2!1sen!2suk");
    map.setAttribute("width", "800");
    map.setAttribute("height", "400");
    map.setAttribute("style", "border:0");
    map.setAttribute("allowfullscreen", "");
    map.setAttribute("loading", "lazy");

    div.appendChild(map);

    return contactPage;

}

export default contactPage