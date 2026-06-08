import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import AchievementHighlightCard from '../components/AchievementHighlightCard';
import { achievements } from '../data/achievements';
import useGsapReveal from '../hooks/useGsapReveal';

import awsSolutionsArchitect from '../assets/aws solutions architect.png';
import awsCloudPractitioner from '../assets/aws cloud practitioner.png';
import nvidiaDli from '../assets/nvidia dli certificate.png';
import oracleDataPlatform from '../assets/oracle data platform.jpeg';
import oracleAiFoundation from '../assets/oracle ai foundation associate.png';
import oracleFoundationsAssociate from '../assets/oracle foundations associate.png';

const CertificationCard = ({ title, issuer, image }) => (
  <div className="certification-card group relative overflow-hidden bg-gray-900/60 backdrop-blur-sm border border-gray-700/60 rounded-2xl hover:bg-gray-800/80 hover:border-gray-600/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gray-700/20 will-change-[transform,opacity]">
    <div className="relative h-44 sm:h-52 overflow-hidden bg-gray-800/50">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-4 sm:p-5">
      <p className="text-gray-200 font-semibold text-sm sm:text-base leading-snug mb-1">{title}</p>
      <p className="text-gray-500 text-xs sm:text-sm mb-4">{issuer}</p>
      <a
        href={image}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
      >
        <ExternalLink className="w-4 h-4" />
        View Certificate
      </a>
    </div>
  </div>
);

const AchievementsSection = () => {
  // Staggered reveals for grids
  const achievementsRef = useGsapReveal({
    animation: 'stagger-children',
    stagger: 0.08,
    scrollTriggerOptions: { start: 'top 85%' }
  });

  const certsRef = useGsapReveal({
    animation: 'stagger-children',
    stagger: 0.1,
    scrollTriggerOptions: { start: 'top 85%' }
  });

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      image: awsSolutionsArchitect,
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      image: awsCloudPractitioner,
    },
    {
      title: 'Nvidia Deep Learning Institute Certificate',
      issuer: 'NVIDIA',
      image: nvidiaDli,
    },
    {
      title: 'Oracle Data Platform 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      image: oracleDataPlatform,
    },
    {
      title: 'Oracle AI Foundation Associate',
      issuer: 'Oracle',
      image: oracleAiFoundation,
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      image: oracleFoundationsAssociate,
    },
  ];

  return (
    <SectionWrapper id="achievements" noAnimation>
      <div>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
            Achievements{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              and Certifications
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full" />
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="w-8 h-8 text-gray-400 mr-3" />
            Achievements
          </h3>
          <div ref={achievementsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="will-change-[transform,opacity]"
              >
                <AchievementHighlightCard {...achievement} />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 text-gray-400 mr-3" />
            Certifications
          </h3>
          <div ref={certsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((certification) => (
              <div
                key={certification.title}
                className="will-change-[transform,opacity]"
              >
                <CertificationCard {...certification} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
