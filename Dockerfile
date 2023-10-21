
FROM node:18-alpine

ENV HOST='127.0.0.1'


RUN npm install -g @libp2p/webrtc-star-signalling-server # buildkit

EXPOSE 9090/tcp


ENTRYPOINT ["webrtc-star", "--port=9090", "--host=", "$HOST"]
