import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChampionsLeague.css'; // You can create a separate CSS file for styling
import Navbar from '../NavigationBarComponents/Navbar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import bayernMunichLogo from '../../images/Logo/groupA/png-transparent-fc-bayern-munich-bundesliga-uefa-champions-league-football-football-cdr-emblem-trademark.png';
import manchesterUnitedLogo from '../../images/Logo/groupA/manu.png';
import kopenhagLogo from '../../images/Logo/groupA/FC_Copenhagen_logo.svg.png';
import galatasarayLogo from '../../images/Logo/groupA/Galatasaray_Sports_Club_Logo.webp';

import sevillaLogo from '../../images/Logo/groupB/Sevillafc.png';
import arsenalLogo from '../../images/Logo/groupB/Arsenal_Football_Club.png';
import psvLogo from '../../images/Logo/groupB/psv.png';
import lensLogo from '../../images/Logo/groupB/RC_Lens_logo.svg.png';

import napoliLogo from '../../images/Logo/groupC/napoli.svg.png';
import realMadridLogo from '../../images/Logo/groupC/realmi.png';
import bragaLogo from '../../images/Logo/groupC/braga.png';
import unionBerlinLogo from '../../images/Logo/groupC/1._FC_Union_Berlin_Logo.svg.png';

import benficaLogo from '../../images/Logo/groupD/benfica.png';
import interLogo from '../../images/Logo/groupD/inter.png';
import salzburgLogo from '../../images/Logo/groupD/salzburg.png';
import realSociedadLogo from '../../images/Logo/groupD/real-sociedad.png';

import feyenoordLogo from '../../images/Logo/groupE/feyenoord.jpeg';
import atleticoMadridLogo from '../../images/Logo/groupE/atletico-madrid.png';
import lazioLogo from '../../images/Logo/groupE/S.S._Lazio_badge.svg.png';
import celticLogo from '../../images/Logo/groupE/celtic.png';

import psgLogo from '../../images/Logo/groupF/psg.png';
import borussiaDortmundLogo from '../../images/Logo/groupF/borussia-dortmund.png';
import milanLogo from '../../images/Logo/groupF/milan.png';
import newcastleUnitedLogo from '../../images/Logo/groupF/newcastle.png';

import manchesterCityLogo from '../../images/Logo/groupG/city.png';
import rbLeipzigLogo from '../../images/Logo/groupG/leipzig.png';
import kizilyildizLogo from '../../images/Logo/groupG/kızılyıldız.png';
import youngBoysLogo from '../../images/Logo/groupG/youngboys.png';



import barcelonaLogo from '../../images/Logo/groupH/barca.png';
import portoLogo from '../../images/Logo/groupH/porto.jpeg';
import shakhtarDonetskLogo from '../../images/Logo/groupH/shaktar.png';
import antwerpLogo from '../../images/Logo/groupH/antwerp.png';
function ChampionsLeague() {
    const [groups, setGroups] = useState([
        {
            group: 'A Grubu',
            teams: [
                { name: 'Bayern Münih', logoUrl: bayernMunichLogo },
                { name: 'Manchester United', logoUrl: manchesterUnitedLogo },
                { name: 'Kopenhag', logoUrl: kopenhagLogo },
                { name: 'Galatasaray', logoUrl: galatasarayLogo },
            ],
        },
        {
            group: 'B Grubu',
            teams: [
                { name: 'Sevilla', logoUrl: sevillaLogo },
                { name: 'Arsenal', logoUrl: arsenalLogo },
                { name: 'PSV', logoUrl: psvLogo },
                { name: 'Lens', logoUrl: lensLogo },
            ],
        },
        {
            group: 'C Grubu',
            teams: [
                { name: 'Napoli', logoUrl: napoliLogo },
                { name: 'Real Madrid', logoUrl: realMadridLogo },
                { name: 'Braga', logoUrl: bragaLogo },
                { name: 'Union Berlin', logoUrl: unionBerlinLogo },
            ],
        },
        {
            group: 'D Grubu',
            teams: [
                { name: 'Benfica', logoUrl: benficaLogo },
                { name: 'Inter', logoUrl: interLogo },
                { name: 'Salzburg', logoUrl: salzburgLogo },
                { name: 'Real Sociedad', logoUrl: realSociedadLogo },
            ],
        },
        {
            group: 'E Grubu',
            teams: [
                { name: 'Feyenoord', logoUrl: feyenoordLogo },
                { name: 'Atletico Madrid', logoUrl: atleticoMadridLogo },
                { name: 'Lazio', logoUrl: lazioLogo },
                { name: 'Celtic', logoUrl: celticLogo },
            ],
        },
        {
            group: 'F Grubu',
            teams: [
                { name: 'Paris Saint-Germain', logoUrl: psgLogo },
                { name: 'Borussia Dortmund', logoUrl: borussiaDortmundLogo },
                { name: 'Milan', logoUrl: milanLogo },
                { name: 'Newcastle United', logoUrl: newcastleUnitedLogo },
            ],
        },
        {
            group: 'G Grubu',
            teams: [
                { name: 'Manchester City', logoUrl: manchesterCityLogo },
                { name: 'RB Leipzig', logoUrl: rbLeipzigLogo },
                { name: 'Kızılyıldız', logoUrl: kizilyildizLogo },
                { name: 'Young Boys', logoUrl: youngBoysLogo },
            ],
        },
        {
            group: 'H Grubu',
            teams: [
                { name: 'Barcelona', logoUrl: barcelonaLogo },
                { name: 'Porto', logoUrl: portoLogo },
                { name: 'Shakhtar Donetsk', logoUrl: shakhtarDonetskLogo },
                { name: 'Antwerp', logoUrl: antwerpLogo },
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
                                                                src="https://sportteamslogo.com/api?key=13aaa61fc2eb497bbe10fea3521ffd97&size=big&tid=2836"
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
