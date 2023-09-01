import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChampionsLeague.css'; // You can create a separate CSS file for styling
import Navbar from '../NavigationBarComponents/Navbar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function ChampionsLeague() {
    const logoUrl =(id) => `https://sportteamslogo.com/api?key=13aaa61fc2eb497bbe10fea3521ffd97&size=big&tid=${id}`
    const [groups, setGroups] = useState([
        {
            group: 'A Grubu',
            teams: [
                { name: 'Bayern Münih', logoUrl: logoUrl(5543) },
                { name: 'Manchester United', logoUrl:logoUrl(35) },
                { name: 'Kopenhag', logoUrl: logoUrl(120852) },
                { name: 'Galatasaray', logoUrl: logoUrl(25426) },
            ],
        },
        {
            group: 'B Grubu',
            teams: [
                { name: 'Sevilla', logoUrl: logoUrl(2833)},
                { name: 'Arsenal', logoUrl: logoUrl(42) },
                { name: 'PSV', logoUrl: logoUrl(2952) },
                { name: 'Lens', logoUrl: logoUrl(1648) },
            ],
        },
        {
            group: 'C Grubu',
            teams: [
                { name: 'Napoli', logoUrl: logoUrl(2714) },
                { name: 'Real Madrid', logoUrl: logoUrl(120854) },
                { name: 'Braga', logoUrl: logoUrl(2999) },
                { name: 'Union Berlin', logoUrl: logoUrl(36618) },
            ],
        },
        {
            group: 'D Grubu',
            teams: [
                { name: 'Benfica', logoUrl: logoUrl(3006) },
                { name: 'Inter', logoUrl: logoUrl(2697) },
                { name: 'Salzburg', logoUrl: logoUrl(2046) },
                { name: 'Real Sociedad', logoUrl: logoUrl(24360) },
            ],
        },
        {
            group: 'E Grubu',
            teams: [
                { name: 'Feyenoord', logoUrl: logoUrl(2959) },
                { name: 'Atletico Madrid', logoUrl: logoUrl(2836) },
                { name: 'Lazio', logoUrl: logoUrl(2699) },
                { name: 'Celtic', logoUrl: logoUrl(120866) },
            ],
        },
        {
            group: 'F Grubu',
            teams: [
                { name: 'Paris Saint-Germain', logoUrl: logoUrl(55505) },
                { name: 'Borussia Dortmund', logoUrl: logoUrl(43719) },
                { name: 'Milan', logoUrl: logoUrl(2692) },
                { name: 'Newcastle United', logoUrl: logoUrl(39) },
            ],
        },
        {
            group: 'G Grubu',
            teams: [
                { name: 'Manchester City', logoUrl: logoUrl(17) },
                { name: 'RB Leipzig', logoUrl: logoUrl(36360) },
                { name: 'Kızılyıldız', logoUrl: logoUrl(5149) },
                { name: 'Young Boys', logoUrl: logoUrl(2445) },
            ],
        },
        {
            group: 'H Grubu',
            teams: [
                { name: 'Barcelona', logoUrl: logoUrl(77889) },
                { name: 'Porto', logoUrl: logoUrl(3002) },
                { name: 'Shakhtar Donetsk', logoUrl: logoUrl(52671) },
                { name: 'Antwerp', logoUrl: logoUrl(2889) },
            ],
        },
    ]);



    const handleDragEnd = (result) => {
        if (!result.destination) return; // Drop outside of a valid droppable

        const source = result.source;
        const destination = result.destination;

        if (
            source.droppableId === destination.droppableId &&
            source.index !== destination.index
        ) {
            const groupIndex = parseInt(source.droppableId.split('-')[1]);
            const updatedGroups = [...groups];
            const [movedTeam] = updatedGroups[groupIndex].teams.splice(
                source.index,
                1
            );
            updatedGroups[groupIndex].teams.splice(
                destination.index,
                0,
                movedTeam
            );

            setGroups(updatedGroups);
        }
    };


    // An array of different background colors
    const colors = [
        'bg-primary',
        'bg-secondary',
        'bg-success',
        'bg-danger',
        'bg-warning',
        'bg-info',
        'bg-success',
        'bg-light',
    ];

    // Define an array of objects containing team names and group information


    return (
        <div className="wh-pg">
            <Navbar />
            <div className="cnt-cnt">
                <h1 className="text-center">Champions League Group Stage</h1>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className="row">
                        {groups.map((group, groupIndex) => (
                            <div key={groupIndex} className="col-md-3 custom-col">
                                <Droppable droppableId={`group-${groupIndex}`} type={`group-${groupIndex}`}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className={`container-box ${colors[groupIndex]}`}
                                        >
                                            <h2>{group.group}</h2>
                                            {group.teams.map((team, teamIndex) => (
                                                <Draggable
                                                    key={teamIndex}
                                                    draggableId={`team-${groupIndex}-${teamIndex}`}
                                                    index={teamIndex}
                                                    type={`group-${groupIndex}`}
                                                >
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="team-container"
                                                        >
                                                            <img
                                                                src={team.logoUrl}
                                                                alt={`${team.name} Logo`}
                                                                className="team-logo"
                                                            />
                                                            <span className="team-name">{team.name}</span>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        ))}
                    </div>
                </DragDropContext>
            </div>
        </div>
    );


}

export default ChampionsLeague;
