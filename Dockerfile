FROM alpine

COPY web/dist /data/static
COPY api/target/release/beauty /data
RUN chmod +x /data/beauty
WORKDIR /data

EXPOSE 8000

CMD ["beauty"]
