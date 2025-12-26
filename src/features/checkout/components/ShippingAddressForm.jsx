export default function ShippingAddressForm({
    shipping = { name: "", address: "", streetNumber: "", zipCode: "" },
    onChange = () => { },
    hasSubmitted = false,
}) {

    const updateField = (field, value) => {
        onChange({ ...shipping, [field]: value });
    };

    const Icon = ({ name, className = "" }) => (
        <span className={`material-symbols-outlined ${className}`}>{name}</span>
    );


    //funciones

    // crear funcion para validar el nombre en el formulario de direccion de envio
    function validateName(value) {
        return value.replace(/[^a-zA-ZÁÉÍÓÚáéíóúÑñ\s]/g, "").slice(0, 50);
    }

    // crear funcion para validar la direccion en el formulario de direccion de envio
    function validateAddress(value) {
        return value.slice(0, 100);
    }

    // crear funcion para validar el numero de calle en el formulario de direccion de envio
    function validateStreetNumber(value) {
        return value.replace(/\D/g, "").slice(0, 10);
    }

    // crear funcion para validar el codigo postal en el formulario de direccion de envio
    function validateZipCode(value) {
        return value.replace(/\D/g, "").slice(0, 10);
    }

    const showNameError = hasSubmitted && !shipping.name.trim();
    const showAddressError = hasSubmitted && !shipping.address.trim();
    const showStreetError = hasSubmitted && !shipping.streetNumber.trim();
    const showZipError = hasSubmitted && !shipping.zipCode.trim();

    return (
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-2xl font-bold text-slate-900">Dirección de envío</h2>
            <div className="mt-6 border-t border-slate-100 pt-6"></div>

            <div className="mt-5 grid grid-cols-1 gap-5">
                {/* Nombre */}
                <label className="block">
                    <div className="flex items-center gap-2">
                        <Icon name="person" className="text-slate-500 text-[20px]" />
                        <span className="text-sm font-medium text-slate-900">Nombre</span>
                    </div>

                    <input
                        className={[
                            "mt-2 w-full rounded-lg border px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                            showNameError
                                ? "border-rose-500 focus:ring-rose-400/40"
                                : "border-slate-200 focus:ring-primary/40",
                        ].join(" ")}
                        value={shipping.name}
                        onChange={(e) => updateField("name", validateName(e.target.value))}
                    />

                    {showNameError && (
                        <p className="mt-2 text-sm text-rose-500">
                            El nombre es obligatorio.
                        </p>
                    )}
                </label>

                {/* Dirección */}
                <label className="block">
                    <div className="flex items-center gap-2">
                        <Icon name="map" className="text-slate-500 text-[20px]" />
                        <span className="text-sm font-medium text-slate-900">Dirección</span>
                    </div>

                    <input
                        className={[
                            "mt-2 w-full rounded-lg border px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                            showAddressError
                                ? "border-rose-500 focus:ring-rose-400/40"
                                : "border-slate-200 focus:ring-primary/40",
                        ].join(" ")}
                        value={shipping.address}
                        onChange={(e) => updateField("address", validateAddress(e.target.value))}
                    />

                    {showAddressError && (
                        <p className="mt-2 text-sm text-rose-500">La dirección es obligatoria.</p>
                    )}
                </label>

                {/* Número Calle + Código Postal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Número Calle */}
                    <label className="block">
                        <div className="flex items-center gap-2">
                            <Icon name="streetview" className="text-slate-500 text-[20px]" />
                            <span className="text-sm font-medium text-slate-900">Número Calle</span>
                        </div>

                        <input
                            className={[
                                "mt-2 w-full rounded-lg border px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                                showStreetError
                                    ? "border-rose-500 focus:ring-rose-400/40"
                                    : "border-slate-200 focus:ring-primary/40",
                            ].join(" ")}
                            value={shipping.streetNumber}
                            onChange={(e) =>
                                updateField("streetNumber", validateStreetNumber(e.target.value))
                            }
                        />

                        {showStreetError && (
                            <p className="mt-2 text-sm text-rose-500">
                                El número de calle es obligatorio.
                            </p>
                        )}
                    </label>

                    {/* Código Postal */}
                    <label className="block">
                        <div className="flex items-center gap-2">
                            <Icon name="markunread_mailbox" className="text-slate-500 text-[20px]" />
                            <span className="text-sm font-medium text-slate-900">Código Postal</span>
                        </div>

                        <input
                            className={[
                                "mt-2 w-full rounded-lg border px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                                showZipError
                                    ? "border-rose-500 focus:ring-rose-400/40"
                                    : "border-slate-200 focus:ring-primary/40",
                            ].join(" ")}
                            value={shipping.zipCode}
                            onChange={(e) =>
                                updateField("zipCode", validateZipCode(e.target.value))
                            }
                        />

                        {showZipError && (
                            <p className="mt-2 text-sm text-rose-500">
                                El código postal es obligatorio.
                            </p>
                        )}
                    </label>
                </div>
            </div>
        </section>
    );
}