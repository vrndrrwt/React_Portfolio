import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box, Typography } from "@mui/material";
import { info } from "../../info/Info";

export default function About() {
    const firstName = info.firstName.trim().toLowerCase();
    const lastName = info.lastName.trim().toLowerCase();
    const baseColor = info.baseColor || "#00ffa4";

    const SectionHeader = ({ path }) => (
        <p>
            <span style={{ color: baseColor }}>{`${firstName}${lastName} $`}</span> cd {path}
        </p>
    );

    const SectionCommand = ({ path }) => (
        <p>
            <span style={{ color: baseColor }}>
                {path} <span className={Style.green}>(main)</span> $
            </span>
        </p>
    );

    function aboutMeText() {
        return (
            <>
                <p>
                    <span style={{ color: baseColor }}>
                        {firstName}{lastName} $ 
                    </span> cat about{firstName}
                </p>
                <SectionCommand path={`about${firstName}`} />
                <Typography variant="body2" className={Style.bioText}>
                    {info.bio}
                </Typography>
            </>
        );
    }

    function skillsText() {
        return (
            <>
                <SectionHeader path="skills/tools" />
                <SectionCommand path="skills/tools" />
                <p style={{ color: baseColor }}>🛠 Proficient With</p>
                <ul className={Style.skills}>
                    {info.skills?.proficientWith?.map((proficiency, index) => (
                        <li key={index}>{proficiency}</li>
                    ))}
                </ul>
                <p style={{ color: baseColor }}>🧪 Exposed To</p>
                <ul className={Style.skills}>
                    {info.skills?.exposedTo?.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </>
        );
    }

    function miscText() {
        return (
            <>
                <SectionHeader path="hobbies/interests" />
                <SectionCommand path="hobbies/interests" />
                <ul className={Style.hobbies}>
                    {info.hobbies?.map((hobby, index) => (
                        <li key={index}>
                            <Box component="span" mr="1rem">{hobby.emoji}</Box>
                            {hobby.label}
                        </li>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt="3rem"
            px="1rem"
        >
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
        </Box>
    );
}
