import { staffData as data } from './staffData.jsx'
import './Staff.css'
import StaffCard from './StaffCard/StaffCard.jsx'

const Staff = () => {
    const dataKeys = Object.keys(data)
    
    return <>
        <main>
            <h1>Staff</h1>
            <div id="staff-container">
                {dataKeys.map( (category, index) => (
                    <StaffCard key={index} name={category} staff={(data[category])} />
                ))}
            </div>
        </main>
    </>
}

export default Staff
