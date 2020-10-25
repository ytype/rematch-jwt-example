FROM python 3.7.5
COPY . /app
WORKDIR /app
RUN pip3 install Flask
RUN pip3 install Flask-JWT
ENTRYPOINT ["python"]
CMD ["app.py"]
