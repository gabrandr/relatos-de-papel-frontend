export default function PaymentMethodForm({
    paymentMethod = "",
    onPaymentMethodChange = () => { },
    card = { nameCard: "", number: "", expiry: "", cvv: "" },
    onCardChange = () => { },
    hasSubmitted = false,
}) {

    //variables
    const isCard = paymentMethod === "card";
    const isPaypal = paymentMethod === "paypal";

    const Icon = ({ name, className = "" }) => (
        <span className={`material-symbols-outlined ${className}`}>{name}</span>
    );

    const updateCardField = (field, value) => {
        onCardChange({ ...card, [field]: value });
    };


    //Funciones

    //crea una funcion para validar el nombre de la tarjeta

    function validateCardName(value) {
        return value.replace(/[^a-zA-Z\s]/g, "").slice(0, 30);
    }


    function formatCardNumber(value) {
        const digits = value.replace(/\D/g, "").slice(0, 16);
        return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
    }

    function formatExpiry(value) {
        const digits = value.replace(/\D/g, "").slice(0, 4);
        if (digits.length <= 2) return digits;
        return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }

    //crea una funcion para validar el cvv
    function validateCvv(value) {
        const digits = value.replace(/\D/g, "").slice(0, 3);
        return digits;
    }



    const normalizedCardNumber = (card.number || "").replace(/\s/g, "");
    const showCardNameError = hasSubmitted && isCard && !card.nameCard?.trim();
    const showCardNumberError = hasSubmitted && isCard && normalizedCardNumber.length !== 16;
    const showExpiryError = hasSubmitted && isCard && !/^\d{2}\/\d{2}$/.test(card.expiry || "");
    const showCvvError = hasSubmitted && isCard && (card.cvv || "").length !== 3;

    return (
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-2xl font-bold text-slate-900">Método de pago</h2>

            {/* Selector de método */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                    type="button"
                    onClick={() => onPaymentMethodChange("card")}
                    className={[
                        "rounded-xl border px-4 py-3 text-left transition",
                        isCard
                            ? "border-primary bg-primary/10"
                            : "border-slate-200 bg-white hover:bg-slate-50",
                    ].join(" ")}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Icon name="credit_card" className="text-primary text-[22px]" />
                            <span className="font-semibold text-slate-900">Tarjeta (TC)</span>
                        </div>
                        <span
                            className={[
                                "h-3 w-3 rounded-full",
                                isCard ? "bg-primary" : "bg-slate-200",
                            ].join(" ")}
                        />
                    </div>
                    <p className="mt-1 text-sm text-slate-600">Paga con tu tarjeta de crédito o débito.</p>
                </button>

                <button
                    type="button"
                    onClick={() => onPaymentMethodChange("paypal")}
                    className={[
                        "rounded-xl border px-4 py-3 text-left transition",
                        isPaypal
                            ? "border-primary bg-primary/10"
                            : "border-slate-200 bg-white hover:bg-slate-50",
                    ].join(" ")}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Icon name="account_balance_wallet" className="text-slate-600 text-[22px]" />
                            <span className="font-semibold text-slate-900">PayPal</span>
                        </div>
                        <span
                            className={[
                                "h-3 w-3 rounded-full",
                                isPaypal ? "bg-primary" : "bg-slate-200",
                            ].join(" ")}
                        />
                    </div>
                    <p className="mt-1 text-sm text-slate-600">Paga rápido sin ingresar tarjeta aquí.</p>
                </button>
            </div>

            {/* Contenido según selección */}
            <div className="mt-5">
                {isCard ? (
                    <div className="rounded-xl border border-slate-200 bg-slate-100 p-5">
                        <div className="grid grid-cols-1 gap-4">
                            <label className="block">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-slate-500 text-[20px]">
                                        badge
                                    </span>
                                    <span className="font-medium text-slate-900">Nombre de la tarjeta</span>
                                </div>

                                <input
                                    className={[
                                        "mt-2 w-full rounded-lg border px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                                        showCardNameError
                                            ? "border-rose-500 focus:ring-rose-400/40"
                                            : "border-slate-200 focus:ring-primary/40",
                                    ].join(" ")}
                                    placeholder="Nombre de la tarjeta"
                                    value={card.nameCard}
                                    onChange={(e) => updateCardField("nameCard", validateCardName(e.target.value))}
                                />
                                {showCardNameError && (
                                    <p className="mt-2 text-sm text-rose-500">El nombre de la tarjeta es obligatorio.</p>
                                )}
                            </label>

                            <label className="block">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-slate-500 text-[20px]">
                                        credit_card
                                    </span>
                                    <span className="font-medium text-slate-900">Número de tarjeta</span>
                                </div>
                                <input
                                    className={[
                                        "mt-2 w-full rounded-lg border px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                                        showCardNumberError
                                            ? "border-rose-500 focus:ring-rose-400/40"
                                            : "border-slate-200 focus:ring-primary/40",
                                    ].join(" ")}
                                    placeholder="0000 0000 0000 0000"
                                    value={card.number}
                                    onChange={(e) => updateCardField("number", formatCardNumber(e.target.value))}
                                />
                                {showCardNumberError && (
                                    <p className="mt-2 text-sm text-rose-500">Ingresa los 16 dígitos de la tarjeta.</p>
                                )}
                            </label>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label className="block">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-symbols-outlined text-slate-500 text-[20px]">
                                            calendar_month
                                        </span>
                                        <span className="font-medium text-slate-900">Fecha de expiración</span>
                                    </div>
                                    <input
                                        className={[
                                            "mt-2 w-full rounded-lg border px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                                            showExpiryError
                                                ? "border-rose-500 focus:ring-rose-400/40"
                                                : "border-slate-200 focus:ring-primary/40",
                                        ].join(" ")}
                                        placeholder="MM/AA"
                                        value={card.expiry}
                                        onChange={(e) => updateCardField("expiry", formatExpiry(e.target.value))}
                                    />
                                    {showExpiryError && (
                                        <p className="mt-2 text-sm text-rose-500">Usa el formato MM/AA.</p>
                                    )}
                                </label>

                                <label className="block">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-symbols-outlined text-slate-500 text-[20px]">
                                            lock_clock
                                        </span>
                                        <span className="text-sm font-medium text-slate-900">CVV</span>
                                    </div>

                                    <input
                                        className={[
                                            "mt-2 w-full rounded-lg border px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                                            showCvvError
                                                ? "border-rose-500 focus:ring-rose-400/40"
                                                : "border-slate-200 focus:ring-primary/40",
                                        ].join(" ")}
                                        placeholder="123"
                                        value={card.cvv}
                                        onChange={(e) => updateCardField("cvv", validateCvv(e.target.value))}
                                    />
                                    {showCvvError && (
                                        <p className="mt-2 text-sm text-rose-500">Ingresa los 3 dígitos del CVV.</p>
                                    )}
                                </label>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-xl border border-slate-200 bg-slate-100 p-5">
                        <p className="text-sm text-slate-600">
                            Serás redirigido a PayPal para completar el pago.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
