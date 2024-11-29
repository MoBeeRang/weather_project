import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { particlesConfigs } from '../contents/particlesConfigs'; // 상태별 설정 파일 import

const ParticleEffect = ({ weatherType }) => {
  const particlesInit = async (main) => {
    await loadFull(main); // tsParticles 초기화
  };

  // 날씨 상태에 따른 옵션 가져오기
  const particlesOptions = particlesConfigs[weatherType] || particlesConfigs.clear;

  return (
    <div className="particle-container">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
    </div>
  );
};

export default ParticleEffect;
