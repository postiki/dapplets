import status from "../../icons/clarity_cloud-network-line.svg";
import setting from "../../icons/carbon_settings-adjust.svg";

import './index.scss'

export default function Header () {
    return (
        <div className='head'>
            <div className='extensions'>
                <img alt='status' src={status} />
                <h2>Extension state: Active</h2>
            </div>
            <div className='settings'>
                <img alt='setting' src={setting} />
                <h2>Settings</h2>
            </div>
        </div>
    )
}