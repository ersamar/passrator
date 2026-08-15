import React, { useState } from "react";
import { PassHeader } from "./PassHeader";
import { PassBody } from "./PassBody";
import s from "./style.module.css";

export function PassCard () {
    const [pass, setpass] = useState("Amazing Passrator");
    return (
        <div className={s.cardroot}>
            <div className={s.main}>
                <PassHeader pass={pass} />
                <PassBody onSubmit={setpass} />
            </div>
        </div>
    );
}