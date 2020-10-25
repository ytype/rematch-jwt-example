FROM python 3.7.5
COPY . /app
WORKDIR /app
RUN pip3 install Flask
RUN pip3 install Flask-JWT
RUN pip3 install flask_cors
ENTRYPOINT ["python"]
CMD ["app.py"]
