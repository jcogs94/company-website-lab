const StaffCard = ({ name, staff }) => {
    const staffKeys = Object.keys(staff)
    let imgLink = ''
    switch (name) {
        case 'Management':
            imgLink = 'https://media.gettyimages.com/id/1302349981/photo/im-the-manager.jpg?s=612x612&w=0&k=20&c=qywNBfpwJZxDInJBGCHFRiQrUAFBWq0QqWHxLxbRfRY='
            break;
        case 'Entertainment':
            imgLink = 'https://t3.ftcdn.net/jpg/06/22/29/16/240_F_622291642_sMDfzCaVIadC6SbqlhbiFlWkubyl7aEg.jpg'
            break;
        case 'Hospitality':
            imgLink = 'https://as2.ftcdn.net/v2/jpg/06/29/15/05/1000_F_629150557_6xJDUfHG3lnLyYQElnJkgFBtMUD8drtX.jpg'
            break;
        case 'Gaming':
            imgLink = 'https://as2.ftcdn.net/v2/jpg/06/46/14/67/1000_F_646146720_HKsdARL0lptpIQcRO9lmriWOGoSieVWP.jpg'
            break;
        case 'Security':
            imgLink = 'https://t4.ftcdn.net/jpg/07/70/10/11/240_F_770101148_XZJcoqh1zYGB3WjqF4GbEVh8aPb5pB9G.jpg'
            break;
    }

    return <>
        <div className="staff-cat">
            <h2>{name}</h2>
            <img src={imgLink} alt={name} />
            <ul>
                {staffKeys.map( (title, index) => (
                    <li key={index}>
                        <b>{title}</b> - { ( Array.isArray(staff[title]) ) ? staff[title].join(', ') : staff[title] }
                    </li>
                ))}
            </ul>
        </div>
    </>
}

export default StaffCard
