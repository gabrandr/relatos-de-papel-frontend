
import { useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCheckout } from "../hooks/useCheckout";
import ShippingAddressForm from "../components/ShippingAddressForm";
import PaymentMethodForm from "../components/PaymentMethodForm";


export default function CheckoutPage(
    {
        summary: summaryProp,
        orderNumber: orderNumberProp,
    }
) {

    const navigate = useNavigate();
    const { state } = useLocation();

    //Variables

    const { shipping,
        setShipping,
        paymentMethod,
        setPaymentMethod,
        card,
        setCard,
        summary: hookSummary
    } = useCheckout();

    const summary = summaryProp ?? state?.summary ?? hookSummary;

    const safeSummary = useMemo(() => {
        const s = summary ?? {};
        return {
            products: Number(s.products) || 0,
            shippingFee: Number(s.shippingFee) || 0,
            taxes: Number(s.taxes) || 0,
            discount: Number(s.discount) || 0,
        };
    }, [summary]);



    const total = useMemo(() => {
        const s = summary ?? {};
        const p = Number(s.products) || 0;
        const sh = Number(s.shippingFee) || 0;
        const t = Number(s.taxes) || 0;
        const d = Number(s.discount) || 0;
        return p + sh + t - d;
    }, [summary]);


    const orderNumber = orderNumberProp ?? state?.orderNumber ?? "ord-";

    const securityText =
        paymentMethod === "paypal"
            ? "🔒 Serás redirigido a PayPal para completar el pago"
            : "🔒 Pago seguro · Tus datos están protegidos";

    const [hasSubmitted, setHasSubmitted] = useState(false);

    //Validaciones

    const isShippingValid =
        shipping.name.trim() &&
        shipping.address.trim() &&
        shipping.streetNumber.trim() &&
        shipping.zipCode.trim();

    const isCardValid =
        card.number.replace(/\s/g, "").length === 16 &&
        /^\d{2}\/\d{2}$/.test(card.expiry) &&
        /^\d{3,4}$/.test(card.cvv);

    const canPay =
        paymentMethod === "paypal"
            ? Boolean(isShippingValid) //si es paypal solo validar direccion
            : Boolean(isShippingValid && isCardValid);

    const handlePay = () => {
        setHasSubmitted(true);
        if (!canPay) return;

        const safeOrderNumber = (orderNumber || "").trim() || "—";

        sessionStorage.setItem(
            "checkout_success_ticket",
            JSON.stringify({ orderNumber: safeOrderNumber, createdAt: Date.now() })
        );

        navigate("/checkout/success", {
            replace: true,
            state: { fromCheckout: true, orderNumber: safeOrderNumber },
        });
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <div className="max-w-6xl mx-auto p-6">
                {/* 🔹 HEADER GLOBAL */}
                <header className="mb-6 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">
                            shopping_cart
                        </span>
                        Checkout
                    </h1>

                    {orderNumber && (
                        <span className="text-sm font-medium text-slate-500">
                            Pedido #{orderNumber}
                        </span>
                    )}
                </header>
                {/* Layout 2 columnas: izquierda contenido, derecha resumen */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Izquierda */}
                    <div className="lg:col-span-2 space-y-6">
                        <ShippingAddressForm
                            shipping={shipping}
                            onChange={setShipping}
                            hasSubmitted={hasSubmitted}
                        />

                        <PaymentMethodForm
                            paymentMethod={paymentMethod}
                            onPaymentMethodChange={setPaymentMethod}
                            card={card}
                            onCardChange={setCard}
                            hasSubmitted={hasSubmitted}
                        />
                    </div>

                    {/* Derecha */}
                    <aside className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:sticky lg:top-6 lg:self-start">
                        <h2 className="text-2xl font-bold text-slate-900 text-center">Resumen Final</h2>

                        <div className="mt-6 space-y-4">
                            <div className="flex justify-between">
                                <span className="text-slate-600">Productos:</span>
                                <span className="text-slate-700">${safeSummary.products.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-slate-600">Envío y manejo:</span>

                                {safeSummary.shippingFee === 0 ? (
                                    <span className="font-semibold text-emerald-600">
                                        Gratis
                                    </span>
                                ) : (
                                    <span className="text-slate-900">
                                        ${safeSummary.shippingFee.toFixed(2)}
                                    </span>
                                )}
                            </div>

                            <div className="flex justify-between">
                                <span className="text-slate-600">Impuestos:</span>
                                <span className="text-slate-700">${safeSummary.taxes.toFixed(2)}</span>
                            </div>

                            <div className="border-t border-slate-200 pt-4 flex justify-between">
                                <span className="text-slate-600">Total descuento:</span>
                                <span className="text-slate-700">${safeSummary.discount.toFixed(2)}</span>
                            </div>

                            <div className="mt-4 flex justify-between items-center rounded-lg bg-slate-50 px-3 py-3">
                                <span className="flex items-center gap-2 font-semibold text-slate-900">
                                    <span className="material-symbols-outlined text-primary text-[20px] leading-none">
                                        receipt_long
                                    </span>
                                    Total pedido:
                                </span>

                                <span className="font-bold text-slate-900">${total.toFixed(2)}</span>
                            </div>


                            <div className="mt-6">
                                <button
                                    type="button"
                                    onClick={handlePay}
                                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-sm"
                                >
                                    <span className="material-symbols-outlined leading-none align-middle text-[22px]">
                                        lock
                                    </span>
                                    <span className="leading-none">Confirmar y Pagar</span>
                                </button>
                            </div>

                            <p className="mt-3 text-center text-sm text-slate-500">
                                {securityText}
                            </p>

                        </div>
                    </aside>
                </div>

            </div>
        </main>
    );
}