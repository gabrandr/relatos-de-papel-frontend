import { useMemo, useState } from 'react';

export function useCheckout() {
    const [shipping, setShipping] = useState({
        name: "",
        address: "",
        streetNumber: "",
        zipCode: "",
    });
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [card, setCard] = useState({
        cardholderName: "",
        number: "",
        expiry: "",
        cvv: "",
    });

    const summary = useMemo(() => ({
        products: 187.0,
        shippingFee: 10.0,
        taxes: 0.0,
        discount: 0.0,
        total: 197.0,
    }), []);

    const total = useMemo(() => {
        return summary.products + summary.shippingFee + summary.taxes - summary.discount;
    }, [summary]);

    return {
        shipping,
        setShipping,
        paymentMethod,
        setPaymentMethod,
        card,
        setCard,
        summary,
        total,
    };
}