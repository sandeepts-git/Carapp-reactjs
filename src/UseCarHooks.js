import React, { useEffect, useReducer, useState } from 'react';

const UseCarHooks = () => {

    const INITIAL_STATE = {

        cars: [],
        totalCars: [],
        isApiLoaded: false,
        latestCars: [],
        bestSellerCars: [],
        individualCar: {},
        filterbox: [{
            "brandvalue": "BMW",
            "brandcheck": false,
            "pricevalue": 10,
            "pricecheck": false
        }, {
            "brandvalue": "Audi",
            "brandcheck": false,
            "pricevalue": 20,
            "pricecheck": false
        }, {
            "brandvalue": "Volkswagen",
            "brandcheck": false,
            "pricevalue": 30,
            "pricecheck": false
        }, {
            "brandvalue": "Tata",
            "brandcheck": false,
            "pricevalue": 50,
            "pricecheck": false
        }, {
            "brandvalue": "Toyota",
            "brandcheck": false,
            "pricevalue": 70,
            "pricecheck": false
        }, {
            "brandvalue": "Ford",
            "brandcheck": false,
            "pricevalue": 80,
            "pricecheck": false
        }],
        filterfuel: [{
            "type": "Petrol",
            "check": false
        },
        {
            "type": "Diesel",
            "check": false
        }],
        bookingDetailsOnChange: {
            name: "",
            mobileNumber: "",
            emailId: ""
        },
        bookingDetailsOnSubmit: {
        },
        bookedCar: {}

    }

    const reducer = (state, action) => {
        let { type, payload } = action

        switch (type) {
            case 'UPDATE_STATE': {

                return {
                    ...state,
                    ...payload
                }
            }
            default: {
                return {
                    state
                }
            }


        }

    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    let { cars, totalCars, filterbox, filterfuel, bookingDetailsOnChange, bookedCar } = state;
    useEffect(() => {

        fetch('https://jsonblob.com/api/999ae172-9dbf-11ea-bd6d-13f3a738cf4d').then(response => response.json().then(json => {
            dispatch({
                type: 'UPDATE_STATE',
                payload: {
                    cars: [...json], totalCars: [...json], isApiLoaded: true,
                    latestCars: [...json.filter(a => a.carName == "BMW X1" || a.carName == "Audi A8 L" || a.carName == "Volkswagen Vento")],
                    bestSellerCars: [...json.filter(a => a.carName == "Tata Tigor" || a.carName == "Audi S5" || a.carName == "Ford Figo")]
                }
            })
        }))
    }, [])



    const handleThirdPage = (s) => {

        dispatch({
            type: "UPDATE_STATE",
            payload: { individualCar: { ...cars.filter((a, i) => i == s)[0] } }
        })

    }

    const handleByBrand = (e, ind) => {

        let filtercopy = filterbox
        filtercopy[ind].brandcheck = e.target.checked
        dispatch({
            type: "UPDATE_STATE",
            payload: {
                filterbox: filtercopy
            }

        })
        handleByFilter()
    }

    const handleByPrice = (e, ind) => {
        let filtercopy1 = filterbox
        filtercopy1[ind].pricecheck = e.target.checked;

        dispatch({
            type: "UPDATE_STATE",
            payload: {
                filterbox: filtercopy1
            }

        })
        handleByFilter()

    }

    const handleByType = (e, ind) => {
        let filtercopy1 = filterfuel
        filtercopy1[ind].check = e.target.checked;

        dispatch({
            type: "UPDATE_STATE",
            payload: {
                filterfuel: filtercopy1
            }

        })
        handleByFilter()
    }

    const handleByInput = (e) => {
        console.log(e.target.value, e.target.id)
        dispatch({
            type: "UPDATE_STATE",
            payload: {
                bookingDetailsOnChange: { ...bookingDetailsOnChange, [e.target.id]: e.target.value }
            }
        })
    }

    const handleBySubmit = (e, carid) => {
        console.log(carid)
        bookedCar = totalCars.filter(car => car.id == carid)[0]
        console.log(bookedCar)
        dispatch({
            type: "UPDATE_STATE",
            payload: {
                bookingDetailsOnSubmit: { ...bookingDetailsOnChange },
                bookedCar: bookedCar
            }
        })
    }

    const handleByFilter = () => {


        let lar = 0;

        filterbox.map(f => {
            if (Number(lar) < Number(f.pricevalue) && f.pricecheck) lar = Number(f.pricevalue)
        })
        let priceLar = lar > 0 ? "" + lar : ""
        { console.log("filter", priceLar) }

        if (filterbox.filter(a => a.brandcheck == true).length > 0) {
            dispatch({
                type: "UPDATE_STATE",
                payload: {
                    cars: [...totalCars.filter((car, i) =>
                        ((car.Brand == filterbox[0].brandvalue) && (filterbox[0].brandcheck)) ||
                        ((car.Brand == filterbox[1].brandvalue) && (filterbox[1].brandcheck)) ||
                        ((car.Brand == filterbox[2].brandvalue) && (filterbox[2].brandcheck)) ||
                        ((car.Brand == filterbox[3].brandvalue) && (filterbox[3].brandcheck)) ||
                        ((car.Brand == filterbox[4].brandvalue) && (filterbox[4].brandcheck)) ||
                        ((car.Brand == filterbox[5].brandvalue) && (filterbox[5].brandcheck))

                    )]
                }
            })
            if (filterfuel.filter(a => a.check == true).length > 0) {

                dispatch({
                    type: "UPDATE_STATE",
                    payload: {
                        cars: [...totalCars.filter((car, i) =>
                            (((car.Brand == filterbox[0].brandvalue) && (filterbox[0].brandcheck)) ||
                                ((car.Brand == filterbox[1].brandvalue) && (filterbox[1].brandcheck)) ||
                                ((car.Brand == filterbox[2].brandvalue) && (filterbox[2].brandcheck)) ||
                                ((car.Brand == filterbox[3].brandvalue) && (filterbox[3].brandcheck)) ||
                                ((car.Brand == filterbox[4].brandvalue) && (filterbox[4].brandcheck)) ||
                                ((car.Brand == filterbox[5].brandvalue) && (filterbox[5].brandcheck))) &&
                            (((car.FuelType == filterfuel[0].type) && (filterfuel[0].check)) ||
                                ((car.FuelType == filterfuel[1].type) && (filterfuel[1].check)))

                        )]
                    }
                })
                if (priceLar != "") {

                    dispatch({
                        type: "UPDATE_STATE",

                        payload: {
                            cars: [...totalCars.filter((car, i) =>
                                (((car.Brand == filterbox[0].brandvalue) && (filterbox[0].brandcheck)) ||
                                    ((car.Brand == filterbox[1].brandvalue) && (filterbox[1].brandcheck)) ||
                                    ((car.Brand == filterbox[2].brandvalue) && (filterbox[2].brandcheck)) ||
                                    ((car.Brand == filterbox[3].brandvalue) && (filterbox[3].brandcheck)) ||
                                    ((car.Brand == filterbox[4].brandvalue) && (filterbox[4].brandcheck)) ||
                                    ((car.Brand == filterbox[5].brandvalue) && (filterbox[5].brandcheck))) &&
                                (Number(car.Price.trim()) < Number(priceLar)) && (((car.FuelType == filterfuel[0].type) && (filterfuel[0].check)) ||
                                    ((car.FuelType == filterfuel[1].type) && (filterfuel[1].check)))
                            )]
                        }
                    })
                }

            }
            else {
                if (priceLar != "") {
                    dispatch({
                        type: "UPDATE_STATE",
                        payload: {
                            cars: [...totalCars.filter((car, i) =>
                                (((car.Brand == filterbox[0].brandvalue) && (filterbox[0].brandcheck)) ||
                                    ((car.Brand == filterbox[1].brandvalue) && (filterbox[1].brandcheck)) ||
                                    ((car.Brand == filterbox[2].brandvalue) && (filterbox[2].brandcheck)) ||
                                    ((car.Brand == filterbox[3].brandvalue) && (filterbox[3].brandcheck)) ||
                                    ((car.Brand == filterbox[4].brandvalue) && (filterbox[4].brandcheck)) ||
                                    ((car.Brand == filterbox[5].brandvalue) && (filterbox[5].brandcheck)))
                                &&
                                Number(car.Price.trim()) < Number(priceLar)

                            )]
                        }
                    })


                }

            }

        }
        else {

            if (priceLar != "") {

                dispatch({
                    type: "UPDATE_STATE",
                    payload: { cars: [...totalCars.filter(car => Number(car.Price.trim()) < Number(priceLar))] }

                })
                if (filterfuel.filter(a => a.check == true).length > 0) {

                    dispatch({
                        type: "CHANGE_CARS",
                        payload: {
                            cars: [...totalCars.filter((car, i) =>

                                (((car.FuelType == filterfuel[0].type) && (filterfuel[0].check)) ||
                                    ((car.FuelType == filterfuel[1].type) && (filterfuel[1].check)))
                                && Number(car.Price.trim()) < Number(priceLar)

                            )]
                        }
                    })
                }
            }
            else {

                if (filterfuel.filter(a => a.check == true).length > 0) {

                    dispatch({
                        type: "CHANGE_CARS",
                        payload: {
                            cars: [...totalCars.filter((car, i) =>

                                ((car.FuelType == filterfuel[0].type) && (filterfuel[0].check)) ||
                                ((car.FuelType == filterfuel[1].type) && (filterfuel[1].check))

                            )]
                        }
                    })
                }
                else {
                    dispatch({
                        type: "CHANGE_CARS",
                        payload: { cars: [...totalCars] }

                    })
                }
            }
        }

    }



    return {
        state,
        handleThirdPage,
        handleByBrand,
        handleByFilter,
        handleByPrice,
        handleByType,
        handleByInput,
        handleBySubmit
    }
}

export default UseCarHooks;
