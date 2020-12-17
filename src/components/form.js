import React, { useState }  from "react"
import axios from "axios";

export default () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });

        if (ok) {
            form.reset();
        }
    };

    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/d0178a7d-0a4d-49cc-addd-3dd35aa38039",
            data: new FormData(form)
        }).then(data => {
            handleServerResponse(true, "Thanks!", form);
        }).catch(data => {
            handleServerResponse(false, data.response.data.error, form);
        });
    };

    return (
        <div>
            <h1 class="email-title">Email</h1>
            <i class="email-hint">Send me an email!</i>

            <form onSubmit={handleOnSubmit}>
                <div class="email-group">
                    <h2
                        class="email-title"
                        for="inputEmail"
                        required="required"
                    >Email address</h2>
                    <input
                        class="email-body"
                        type="email"
                        name="email"
                        id="inputEmail"
                        placeholder="Enter email"
                        required="required"
                    />
                </div> 

                <div class="email-group">
                    <h2
                        class="email-title"
                        for="inputName"
                        required="required"
                    >Name</h2>
                    <input
                        class="email-body"
                        type="text"
                        name="name"
                        id="inputName"
                        placeholder="Enter your name"
                        required="required"
                    />
                </div>

                <div class="email-group">
                    <h2
                        class="email-title"
                        for="inputBody"
                        required="required"
                    >Body</h2>
                    <textarea
                        class="email-msg"
                        type="text"
                        name="message"
                        id="inputBody"
                        placeholder="Enter your message"
                        required="required"
                    />
                </div>

                <button class="email-button" type="submit"  disabled={serverState.submitting}>
                    Submit
                </button>

                {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                        {serverState.status.msg}
                    </p>
                )}
            </form>
        </div>
    );
};