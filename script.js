let selectedOffer = null;
const productOffers = [
    {
        discount: "30",
        title: "Buy 1 Get 2",
        price: "$18.00",
        taging: "",
        id: "offer1"
    },
    {
        discount: "30",
        title: "Buy 2 Get 4",
        price: "$24.00",
        taging: "Most popular",
        id: "offer2"
    },
    {
        discount: "10",
        title: "Buy 3 Get 6",
        price: "$36.00",
        taging: "",
        id: "offer3"
    }
]

const productOffersObj = {
    offer1: {
        discount: "30",
        title: "Buy 1 Get 2",
        price: "$18.00",
        taging: "",
        id: "offer1"
    },
    offer2: {
        discount: "30",
        title: "Buy 2 Get 4",
        price: "$24.00",
        taging: "Most popular",
        id: "offer2"
    },
    offer3: {
        discount: "10",
        title: "Buy 3 Get 6",
        price: "$36.00",
        taging: "",
        id: "offer3"
    }
}
const getLargeCardView = (offer)=>{
    return `<div class="selected-offer-left-panel">
        <div id="offer-option-selected">
            <div class="custom-radio-button-cont">
                <div class="custom-radio-button-inner">

                </div>
            </div>
            <div class="offer-selected-title">
                <div>
                    <span class="buy">

                        ${offer.title}
                    </span>
                    <span class="parentOfRecducedPercent">${offer.discount}% Off</span>
                </div>
                <div>

                    <span class="price"> ${offer.price} USD </span>
                    <span class="reduced-price">$10.00 USD</span>

                </div>
            </div>
        </div>

        <table id="offer-selected-table">
            <tr>
                <td class="serial-no-title"></td>
                <td class="size-title">Size</td>

                <td class="color-title">Color</td>
            </tr>
            <tr>

                <td>
                    <label for="">#1</label>

                </td>
                <td> <select type="dropdown" class="dropdown-input-size">

                        <option value="small">S </option>
                        <option value="medium">M</option>
                        <option value="extra-large">XL</option>
                    </select></td>
                <td>
                    <select type="dropdown" class="dropdown-input-color">
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="blue">Blue</option>
                    </select>
                </td>
            </tr>
            <tr>

                <td>
                    <label for="">#2</label>

                </td>
                <td><select type="dropdown" class="dropdown-input-size">

                        <option value="small">S</option>
                        <option value="medium">M</option>
                        <option value="extra-large">XL</option>
                    </select></td>
                <td>
                    <select type="dropdown" class="dropdown-input-color">
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="blue">Blue</option>
                    </select>
                </td>
            </tr>
        </table>
        </div>
        <div class="tagging-logo">${offer.taging}</div>`
}

const getSmallCardView = (offer)=>{
    return`<div class="small-card-view__left-panel-offer">${offer.discount}% <br />Off
                <svg id="vertical-line-dotted-vector" width="2" height="72" viewBox="0 0 2 72" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1C1 28.7272 1 71 1 71" stroke="url(#paint0_linear_1_30)" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4" />
                    <defs>
                        <linearGradient id="paint0_linear_1_30" x1="1.5" y1="29" x2="1" y2="29"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F7F8FF" />
                            <stop offset="1" stop-color="white" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div>
                <div class="custom-radio-button-cont">
                </div>
            </div>
            <div class="offer-details">
                <span class="buy">
                    ${offer.title}
                </span>
                <br />
                <span class="price">
                    ${offer.price} USD
                </span>
            </div>
            <span class="tagging-logo"> ${offer.taging}</span>`
}
const handleOnClickOffer = (e, offer) => {

    const myNewOfferDiv = document.getElementById(offer.id)
    if (selectedOffer === null) {
        const largeCardView = getLargeCardView(offer)
        myNewOfferDiv.classList = "selected-offer-main-container"
        myNewOfferDiv.innerHTML = largeCardView;
        selectedOffer = offer.id
    }
    else if (selectedOffer !== offer.id) {
        console.log(e.target, offer)
        const previousSelectedOffer = document.getElementById(selectedOffer);
        const oldOffer = productOffersObj[selectedOffer]
        const smallCardView = getSmallCardView(oldOffer)
        previousSelectedOffer.innerHTML = smallCardView;
        previousSelectedOffer.classList = "small-card-view";
        const largeCardView = getLargeCardView(offer)
        myNewOfferDiv.classList = "selected-offer-main-container"
        myNewOfferDiv.innerHTML = largeCardView;
        selectedOffer = offer.id
    }
    document.getElementById("total-price").innerText = productOffersObj[selectedOffer].price
}

const handleWindowLoad = () => {

    productOffers.forEach((offer) => {
        if (!document.getElementById(offer.id)) {
            console.log(offer)
            const smallCardView = getSmallCardView(offer)
            let div = document.createElement('div');
            div.classList = "small-card-view"
            div.id = offer.id
            div.innerHTML = smallCardView;
            // div.addEventListener("click", handleOnClickOffer,)
            document.getElementById("all-offers-main-cont").appendChild(div)
            document.getElementById(offer.id).addEventListener("click", (e) => { handleOnClickOffer(e, offer) })
        }
    })

}

window.addEventListener("load", handleWindowLoad);
