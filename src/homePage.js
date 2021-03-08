const homePage = () => {

    console.log("home");

    const contentDiv = document.querySelector("#content");

    const copy = [
        "Fergus Henderson and Trevor Gulliver opened London’s St. JOHN Smithfield in 1994. Since then, Fergus and Trevor have been recognised as the original pioneers of nose-to-tail cooking, with the accolades to prove it. Often labelled an institution, St. JOHN is considered to be one of the cornerstones of the British restaurant scene.",
        "For more than a quarter of a century, Fergus and Trevor have been serving up food that is as elegantly simple as it is heartfelt and generous. At once ever-evolving and steeped in tradition, theirs is a true celebration of British ingredients.",
        "Where Fergus is responsible for putting food on the plate, Trevor is responsible for putting wine in the glass. Trevor’s close relationships with vignerons have formed the strong reputation enjoyed by St. JOHN’s all-French wine list, and the production of the critically-acclaimed wines at the St. JOHN winery in France is informed and built by his expertise.",
    ]
    const p0 = document.createElement("p");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p0.textContent = copy[0];
    p1.textContent = copy[1];
    p2.textContent = copy[2];
    contentDiv.appendChild(p0);
    contentDiv.appendChild(p1);
    contentDiv.appendChild(p2);

    const imageHero = document.createElement("div");
    imageHero.classList.add("imageHero");
    contentDiv.appendChild(imageHero);



    return null;

}

export default homePage