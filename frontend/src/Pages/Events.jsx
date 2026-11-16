
import '../CSS/Events.css';
import Event_intro from '../Events_components/event_intro';
import Event_card from '../Events_components/event_card';

import KCC from '../assets/KCC.png';
import Sarvagya from '../assets/Sarvagya.png';
import BoxCricketTournament from '../assets/Box-Cricket-Tournament.png';
import Drishti from '../assets/Drishti.png';
import Tekron from '../assets/Tekron.png';
import Culmyca from '../assets/Culmyca.png';
import Aayam from '../assets/Aayam.png';
import DesignX from '../assets/DesignX.png';
import Moksha from '../assets/Moksha.png';
import Damru from '../assets/Damru.png';

import { useState, useEffect } from 'react';

export default function Events() {
    const [Type, setType] = useState('All');
    const [submittedEvents, setSubmittedEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/api/events')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Could not fetch events');
                }
                return response.json();
            })
            .then(data => setSubmittedEvents(data))
            .catch(error => console.error('Events loading error:', error));
    }, []);

    // Existing PRERA events
    const Events_data = [
        {
            name: 'KCC 2026',
            organization: 'Kixar Pvt. Ltd.',
            Type: 'Sports',
            Description: 'Cultural Fest',
            Date: '3rd and 4th January 2026',
            Audience: '2000+',
            url: KCC
        },
        {
            name: 'Visual Vortex 2.O',
            organization: 'GDG Rishihood',
            Type: 'Tech',
            Description: 'Cultural Fest',
            Date: '17th and 18th January 2026',
            Audience: '2000+',
            url: 'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
        },
        {
            name: 'SARVAGYA 2026',
            organization: 'Hindu College, DU',
            Type: 'Cultural',
            Description: 'Cultural Fest',
            Date: '9th and 10th January 2026',
            Audience: '2000+',
            url: Sarvagya
        },
        {
            name: 'Damru',
            organization: 'Rishihood University',
            Type: 'Cultural',
            Description: 'Cultural Fest',
            Date: '29th and 30th Nov',
            Audience: '2000+',
            url: Damru
        },
        {
            name: 'Box Cricket Tournament',
            organization: 'Kixar Pvt. Ltd.',
            Type: 'Sports',
            Description: 'Cultural Fest',
            Date: '23rd, 24th and 25th January 2026',
            Audience: '2000+',
            url: BoxCricketTournament
        },
        {
            name: 'Startup Pichathon',
            organization: 'Unibazar Pvt. Ltd.',
            Type: 'Tech',
            Description: 'Cultural Fest',
            Date: '23rd Jan, 2026',
            Audience: '2000+',
            url: 'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
        },
        {
            name: 'DRISHTI-2026',
            organization: 'Hindu College, DU',
            Type: 'Cultural',
            Description: 'Cultural Fest',
            Date: '20 March, 2026',
            Audience: '2000+',
            url: Drishti
        },
        {
            name: 'Tekron 2.O',
            organization: 'NST Pune',
            Type: 'Cultural',
            Description: 'Cultural Fest',
            Date: '31st Jan, 1st Feb, 2026',
            Audience: '2000+',
            url: Tekron
        },
        {
            name: 'Culmyca 2026',
            organization: 'JC BOSE UST YMCA Faridabad',
            Type: 'Cultural',
            Description: 'Cultural Fest',
            Date: '9th, 10th April 2026',
            Audience: '2000+',
            url: Culmyca
        },
        {
            name: 'Tech GC',
            organization: 'NST x RU',
            Type: 'Tech',
            Description: 'Cultural Fest',
            Date: '31st Jan, 1st Feb, 2026',
            Audience: '2000+',
            url: 'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
        },
        {
            name: 'AAYAM 2026',
            organization: 'NST Bengaluru',
            Type: 'Cultural',
            Description: 'Cultural Fest',
            Date: '24th, 25th April, 2026',
            Audience: '2000+',
            url: Aayam
        },
        {
            name: 'Rena 2026',
            organization: 'BVIMR',
            Type: 'Cultural',
            Description: 'Cultural Fest',
            Date: '17th and 18th March',
            Audience: '2000+',
            url: 'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
        },
        {
            name: 'Startup Pichathon (MUJ)',
            organization: 'Unibazar Pvt. Ltd.',
            Type: 'Tech',
            Description: 'Cultural Fest',
            Date: '8th April, 2026',
            Audience: '2000+',
            url: 'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
        },
        {
            name: 'Moksha',
            organization: 'NSUT',
            Type: 'Cultural',
            Description: 'Cultural Fest',
            Date: '18th, 19th and 20th April',
            Audience: '2000+',
            url: Moksha
        },
        {
            name: 'DesignX',
            organization: 'Rishihood University',
            Type: 'Design',
            Description: 'Design Fest',
            Date: '17th and 18th April',
            Audience: '2000+',
            url: DesignX
        },
        {
            name: 'Rexia',
            organization: 'Starex University',
            Type: 'Cultural',
            Description: 'Cultural Fest',
            Date: '6th and 7th May',
            Audience: '2000+',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDaH6C9UGwiPfgUgv5x2_Fd2W2rYW3GPFPQ&s'
        }
    ];

    // Convert backend events into the format used by Event_card
    const dynamicEvents = submittedEvents.map(event => ({
        id: event._id,
        name: event.eventName,
        organization: event.organizerName,
        Type: event.category,
        Description: event.description,
        Date: event.date
            ? new Date(event.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            })
            : '',
        Venue: [event.venue, event.city].filter(Boolean).join(', '),
        Audience: event.audience
            ? `${event.audience} attendees`
            : '',
        url: event.posterUrl
            ? `http://localhost:5001${event.posterUrl}`
            : '',
        link: event.registrationLink || ''
    }));

    // Combine existing and newly approved events
    const allEvents = [...Events_data, ...dynamicEvents];

    // Apply category filter and display event cards
    const filteredEvents = Type === 'All'
        ? allEvents
        : allEvents.filter(
            event => event.Type?.toLowerCase() === Type.toLowerCase()
        );

    return (
        <>
            <Event_intro />

            <ul
                style={{
                    listStyleType: 'none',
                    color: 'white',
                    display: 'flex',
                    gap: '20px',
                    justifyContent: 'space-evenly',
                    margin: '30px 0px 70px 0px',
                    fontSize: '24px'
                }}
            >
                <li className='filter' onClick={() => setType('All')}>
                    All
                </li>
                <li className='filter' onClick={() => setType('Cultural')}>
                    Cultural
                </li>
                <li className='filter' onClick={() => setType('Tech')}>
                    Tech
                </li>
                <li className='filter' onClick={() => setType('Sports')}>
                    Esports
                </li>
            </ul>

            <div id='cards-div'>
                {filteredEvents.map((event, index) => (
                    <Event_card
                        key={event.id || event.name + index}
                        name={event.name}
                        Collegename={event.organization}
                        Description={event.Description}
                        Date={event.Date}
                        Venue={event.Venue || ''}
                        Audience={event.Audience}
                        url={event.url}
                        link={event.link || ''}
                    />
                ))}
            </div>
        </>
    );
}
