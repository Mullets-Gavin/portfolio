import React, { useState }  from "react"
import axios from "axios";

const MyForm = () => {
    
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

    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/d0178a7d-0a4d-49cc-addd-3dd35aa38039",
        data: new FormData(form)
      }).then(r => {
          handleServerResponse(true, "Thanks!", form);
        }).catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };

    return (
        <div>
            <h1 class="email-title">Email</h1>
            <i class="email-hint">Send me an email!</i>

            <form onSubmit={handleOnSubmit}>
                <div class="email-group">
                    <h2
                        for="inputEmail"
                        required="required"
                        class="email-title"
                    >Email address</h2>
                    <input
                        type="email"
                        name="email"
                        class="email-body"
                        id="inputEmail"
                        placeholder="Enter email"
                        required="required"
                    />
                </div> 

                <div class="email-group">
                    <h2
                        for="inputName"
                        class="email-title"
                    >Name</h2>
                    <input
                        type="text"
                        name="name"
                        class="email-body"
                        id="inputName"
                        placeholder="Enter your name"
                        required="required"
                    />
                </div>

                <div class="email-group">
                    <h2
                        for="inputBody"
                        class="email-title"
                    >Body</h2>
                    <textarea 
                        type="text"
                        name="name"
                        class="email-msg"
                        id="inputBody"
                        placeholder="Enter your message"
                        required="required"
                    />
                </div>

                <button type="submit" className="email-button"  disabled={serverState.submitting}>
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
  
  export default MyForm;