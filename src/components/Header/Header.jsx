import status from "../../icons/clarity_cloud-network-line.svg";
import setting from "../../icons/carbon_settings-adjust.svg";

import './index.scss'

export default function Header () {
    return (
        <div className='header'>
            <div className='extensions'>
                <img src={status} />
                <p>Extension state: Active</p>
            </div>
            <div className='settings'>
                <img src={setting} />
                <p>Settings</p>
            </div>
        </div>
    )
}