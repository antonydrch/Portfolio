import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import WebGL from '@/layouts/WebGL';
import { ProjectData } from '@/types';

export interface GamesProps {
  data: Array<ProjectData>;
}

function Games({ data }: GamesProps) {
  const { name } = useParams();
  const [gameData, setGameData] = useState<ProjectData>();

  useEffect(() => {
    const dataFound = data.find((elem: ProjectData) => elem.name === name);
    setGameData(dataFound);
  }, [data, name]);

  if (gameData?.webGLPath && gameData?.filename) {
    return (
      <WebGL path={gameData?.webGLPath} filename={gameData?.filename} />
    );
  }
  return (
    <div />
  );
}

export default Games;
