import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom/";
import { baseUrl } from "../../services/getRequests";
import { Typography } from "@material-ui/core";
import CloudDownloadRoundedIcon from "@material-ui/icons/CloudDownloadRounded";
import CloudUploadRoundedIcon from "@material-ui/icons/CloudUploadRounded";
import { BoxIcons, Posts, BoxComents, SpaceComent, SpaceIcon } from "./styles";

const Post = () => {
  const [posts, setPosts] = useState({
    nomeUsuario: "Usuário",
    textoPost: "TEXTO DO POST",
    quantidadeVotos: 0,
    quantidadeComentarios: 0,
  });

  
  return (
    <>
      <Posts>
        <Typography variant="h6">{posts.nomeUsuario}</Typography>
        <BoxComents>
          <Typography variant="body1">{posts.textoPost}</Typography>
        </BoxComents>
        <BoxIcons>
          <SpaceIcon>
            <CloudUploadRoundedIcon style={{ cursor: "pointer" }} />
            <Typography variant="h6">{posts.quantidadeVotos}</Typography>
            <CloudDownloadRoundedIcon style={{ cursor: "pointer" }} />
          </SpaceIcon>
          <SpaceComent>
            <Typography variant="h6">
              {posts.quantidadeComentarios} comentários
            </Typography>
          </SpaceComent>
        </BoxIcons>
      </Posts>
      <Posts>
        <Typography variant="h6">{posts.nomeUsuario}</Typography>
        <BoxComents>
          <Typography variant="body1">{posts.textoPost}</Typography>
        </BoxComents>
        <BoxIcons>
          <SpaceIcon>
            <CloudUploadRoundedIcon style={{ cursor: "pointer" }} />
            <Typography variant="h6">{posts.quantidadeVotos}</Typography>
            <CloudDownloadRoundedIcon style={{ cursor: "pointer" }} />
          </SpaceIcon>
          <SpaceComent>
            <Typography variant="h6">
              {posts.quantidadeComentarios} comentários
            </Typography>
          </SpaceComent>
        </BoxIcons>
      </Posts>
      <Posts>
        <Typography variant="h6">{posts.nomeUsuario}</Typography>
        <BoxComents>
          <Typography variant="body1">{posts.textoPost}</Typography>
        </BoxComents>
        <BoxIcons>
          <SpaceIcon>
            <CloudUploadRoundedIcon style={{ cursor: "pointer" }} />
            <Typography variant="h6">{posts.quantidadeVotos}</Typography>
            <CloudDownloadRoundedIcon style={{ cursor: "pointer" }} />
          </SpaceIcon>
          <SpaceComent>
            <Typography variant="h6">
              {posts.quantidadeComentarios} comentários
            </Typography>
          </SpaceComent>
        </BoxIcons>
      </Posts>
      <Posts>
        <Typography variant="h6">{posts.nomeUsuario}</Typography>
        <BoxComents>
          <Typography variant="body1">{posts.textoPost}</Typography>
        </BoxComents>
        <BoxIcons>
          <SpaceIcon>
            <CloudUploadRoundedIcon style={{ cursor: "pointer" }} />
            <Typography variant="h6">{posts.quantidadeVotos}</Typography>
            <CloudDownloadRoundedIcon style={{ cursor: "pointer" }} />
          </SpaceIcon>
          <SpaceComent>
            <Typography variant="h6">
              {posts.quantidadeComentarios} comentários
            </Typography>
          </SpaceComent>
        </BoxIcons>
      </Posts>
    </>
  );
};

export default Post;
