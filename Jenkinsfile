pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'prod', url: 'https://github.com/jaswanth1998/personal.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build('my-react-app')
                }
            }
        }
        stage('Deploy to Server') {
            steps {
                sshagent(['your-ssh-credentials-id']) {
                    sh '''
                    docker stop my-react-app || true
                    docker rm my-react-app || true
                    docker run -d -p 80:80 --name my-react-app my-react-app
                    '''
                }
            }
        }
    }
}
