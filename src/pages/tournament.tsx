import { useEffect, useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { cn } from "../util/tailwindMerge";
import Link from "next/link";
import { placeholder } from "../components/contests/images";
import Image from "next/image";
import mascotImage from "../images/mascot.webp";
import waveSVG from "../images/wave.svg"

const CONTEST_TIME_MILLISECONDS = 1709402400000;
const CONTEST_REGISTRATION_FORM_LINK = "https://forms.gle/4vHJeGiYGLgHRv4E6";

const tournament_info = {
    'standard': {
        name: 'Standard',
        description: 'For competitors at the USACO Bronze or Silver level, and rated under 1600 on Codeforces.',
        prizes: [
            '1st Place: $150 USD',
            '2nd Place: $100 USD',
            '3rd Place: $50 USD',
            '4th-8th Place: $15 USD',
        ]
    },
    'advanced': {
        name: 'Advanced',
        description: 'For competitors at the USACO Gold or Platinum level, or rated 1600 and over on Codeforces.',
        prizes: [
            '1st Place: $300 USD',
            '2nd Place: $200 USD',
            '3rd Place: $100 USD',
            '4th-8th Place: $15 USD',
        ]
    }
}

function Card({ className, division }: { className?: string, division: keyof typeof tournament_info }) {
    const cardInformation = tournament_info[division];
    return <div className={cn("h-auto bg-white text-white border rounded-xl container shadow-lg px-6 py-6 my-6", className)}>
        <h2 className="text-4xl leading-none font-extrabold tracking-tight text-white">{cardInformation.name} Division</h2>
        <p className="mt-2 text-lg leading-7 py-2">
            {cardInformation.description}
        </p>
        <h3 className="text-2xl tracking-tight font-extrabold leading-none text-white pt-6 pb-2">
            Winners
        </h3>
        <ul className="pl-4">
            {cardInformation.prizes.map((x, index) => (
                <li key={x}>
                    <p className={"text-lg"}>{x}</p>
                </li>
            ))}
        </ul>
    </div>
}


export default function Tournament() {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(CONTEST_TIME_MILLISECONDS - Date.now());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return <Layout>
        <SEO
            title="USACO Guide Informatics Tournament"
            description="An annual precollege programming contest held by the Competitive Programming Initiative to reward growth in problem-solving and computer science."
        />

        <Header dark noBanner />

        <main className="min-h-screen">
            <div className="flex-1 bg-gray-900 relative pb-24 md:pb-40 lg:pb-48 xl:pb-72 2xl:pb-96 flex flex-col lg:flex-row items-center justify-evenly animate mt-16 text-gray-300">
                <div className="flex flex-col">
                    <h1 className="text-center text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight font-extrabold mx-auto pt-12 text-center">
                        <span className="from-purple-500 to-purple-300 bg-gradient-to-br text-transparent bg-clip-text">USACO.Guide</span><br /> Informatics Tournament
                    </h1>
                    <h2 className="text-lg text-gray-400 font-bold md:text-xl lg:text-2xl pt-4 pb-2 py-4 mx-auto text-center">
                        Saturday, March 2nd, 2024 <br /> 10 am - 1 pm PST.
                    </h2>
                    <Link className="mx-auto text-white rounded-xl focus:translate-y-1 hover:shadow-inner hover:shadow-gray-800 transition-all duration-150 bg-gradient-to-b from-[hsla(220,7%,42%,1)] to-[hsla(219,11%,31%,1)] text-lg lg:text-xl px-8 py-3" href={CONTEST_REGISTRATION_FORM_LINK}>
                        Register &rarr;
                    </Link>
                    <Link className="font-medium underline hover:opacity-60 mx-auto pt-2 transition-opacity duration-150" href={"https://discord.gg/SutDSVX6Zt"}>
                        Join Discord Server &rarr;
                    </Link>
                </div>
                <div className="flex-1 bg-gray-900 flex flex-col max-w-fit">
                    {/* <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl px-10 text-center pt-6 pb-6 py-4">
                        The USACO.Guide Informatics Tournament is a programming contest for precollege students hosted by the USACO.Guide and CP Initiative.
                    </h2> */}
                    {/* 
                    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl mx-auto text-center max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-4">
                        {timeLeftString(timeLeft)}
                    </h2> */}
                    <Image width={512} height={512} className="hover:scale-105 duration-300 transition-all" src={mascotImage} alt="Mascot!" />
                    {/* <section className="flex flex-col md:flex-row gap-x-4">
                        <Link className="inline-flex sm:text-lg py-3 px-6 sm:py-4 mt-6 sm:px-8 rounded-md shadow bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-gray-900" href={CONTEST_REGISTRATION_FORM_LINK}>
                            Register Now &rarr;
                        </Link>
                        <Link className="inline-flex sm:text-lg py-3 px-6 sm:py-4 mt-6 sm:px-8 rounded-md shadow bg-gradient-to-r from-blue-700 to-blue-900 text-white font-medium hover:from-blue-800 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-gray-900" href={"https://discord.gg/SutDSVX6Zt"}>
                            Join Discord Server &rarr;
                        </Link>
                    </section> */}

                </div>
                <Image className="absolute bottom-0" src={waveSVG} alt="Waves for bottom of hero section" />
            </div>
            <section className="flex flex-col md:flex-row mx-12 my-12">
                <div className="md:basis-1/2 mx-auto text-lg md:text-xl lg:text-2xl">
                    The USACO.Guide Informatics Tournament is a programming contest for precollege students hosted by the USACO.Guide and CP Initiative.
                </div>
                <div className="md:basis-1/2 flex mx-auto my-6 justify-center gap-x-4 w-fit">
                    {timeLeftString(timeLeft).map((x, index) => {
                        const extension = x === 1 ? '' : 's';
                        const units = ['day', 'hour', 'minute', 'second'];
                        return (
                            <div className="flex flex-col h-16 w-16">
                                <div className="bg-gray-200 p-4 text-center aspect-square text-lg md:text-xl lg:text-2xl">
                                    {x}
                                </div>
                                <span className="text-center">
                                    {units[index] + extension}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </section>
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-purple-400 to-blue-600 bg-clip-text text-transparent">Prizes</h1>
            <section className="flex flex-col bg-white md:flex-row justify-evenly mx-auto w-screen px-6 md:px-12 xl:px-36 lg:px-24 lg:gap-x-12 gap-x-6 md:gap-x-8">
                <Card key={"standard"} className="md:basis-1/2 border-0 bg-gradient-to-bl from-blue-700 to-blue-900 from-10% via-80% to-90%" division="standard" />
                <Card key={"advanced"} className="md:basis-1/2 border-0 bg-gradient-to-bl from-purple-600 to-purple-900" division="advanced" />
            </section>
            <section className="flex flex-col items-center container mx-auto text-justify px-6 bg-white flex-col">
                <h2 className="text-3xl md:text-4xl lg:text-5xl pb-6 mt-12 tracking-tight font-extrabold bg-gradient-to-tr from-blue-400 to-purple-600 bg-clip-text text-transparent">Contest Format & Rules</h2>
                <p className="text-xl lg:text-2xl py-4">
                    <span className="font-bold italic">Only precollege students</span> are eligible for prizes but anyone can participate. <span className="font-bold italic">This is a solo contest. No teams!</span>
                </p>
                <p className="text-xl lg:text-2xl py-4">
                    There will be both a standard and advanced division; the contest will last 3 hours and each division will have 8 problems.
                </p>
                <p className="text-xl lg:text-2xl py-4">
                    If you are 1600+ on Codeforces OR Gold+ in USACO we require you to participate in the advanced division. Otherwise we recommend you to participate in the beginner division.
                </p>
                <p className="text-xl lg:text-2xl py-4">
                    You may use any prewritten code before the contest and online content published prior to the start of the contest. However, you may not collaborate with other people during the contest.
                </p>
                <p className="text-xl lg:text-2xl py-4">
                    The contest will be hosted on <Link className="text-blue-400 hover:text-blue-600 transition-colors duration-300" href={"https://codeforces.com"}>Codeforces</Link>, so make sure you have an account!
                </p>
                <p className="py-4 text-xl lg:text-2xl font-bold">
                    We reserve the right to disqualify and/or remove from prize consideration participants who intentionally participate in divisions with problem difficulties that are too low for the skill level of the participant. We do not tolerate those who attempt to undermine the fairness of the competition.
                </p>
            </section>
            <h2 className="text-xl lg:text-3xl text-5xl text-center font-extrabold py-6 tracking-tight">Questions? Join our
                <span className="bg-blue-300 bg-opacity-30 transition-all duration-300 hover:bg-blue-500 hover:text-white rounded-md px-2 mx-2"><Link href="https://discord.gg/SutDSVX6Zt">Discord Server</Link></span> and ask in the
                <span className="bg-blue-300 bg-opacity-30 transition-all duration-300 hover:bg-blue-500 hover:text-white rounded-md px-2 mx-2"><Link href="https://discord.com/channels/1198424031469261003/1198425276779077682">#questions</Link></span>
                channel!
            </h2>
        </main>
    </Layout>
}

function timeLeftString(milliseconds: number) {
    const seconds = Math.floor(milliseconds / 1000) % 60;
    const minutes = Math.floor(milliseconds / 60000) % 60
    const hours = Math.floor(milliseconds / 3600000) % 24;
    const days = Math.floor(milliseconds / 86400000);
    return [days, hours, minutes, seconds];
    // return `${days} day${days === 1 ? '' : 's'}, ${hours} hour${hours === 1 ? '' : 's'}, ${minutes} minute${minutes === 1 ? '' : 's'}, and ${seconds} second${seconds === 1 ? '' : 's'} until the start of the contest.`;
}
