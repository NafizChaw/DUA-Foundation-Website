import React from 'react';
import './DonationSection.css';

function DonationSection() {
    return (
        <div className="donation-section">
            <select>
                <option value="fund">Donation Fund</option>
                {/* Add more options if needed */}
            </select>
            <input type="text" placeholder="Phone / Email" />
            <input type="number" placeholder="Donation Amount" />
            <button className="btn-donate">Donate</button>
        </div>
    );
}

export default DonationSection;
