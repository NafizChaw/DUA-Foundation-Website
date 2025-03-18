import React from 'react';

function Donate() {
    return (
        <div className="container py-5">
            <h1>Donate to the Dua Foundation</h1>
            <p>Your contribution can make a difference.</p>

            <div className="mt-4">
                <h3>Donation Methods</h3>
                <ul>
                    <li><strong>Bkash:</strong> [Bkash Number Here]</li>
                    <li><strong>Zelle:</strong> [Zelle Email or Number Here]</li>
                    <li><strong>Bank Transfer:</strong> [Add details here, if applicable]</li>
                </ul>
            </div>

            <p className="mt-4">
                Please choose any of the above methods to donate. For more information or alternative donation methods,
                feel free to <a href="#contact-section">contact us</a> or check the Contact section on our home page.
            </p>
        </div>
    );
}

export default Donate;
