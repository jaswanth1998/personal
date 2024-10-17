def remote=[:]

remote.name = 'front-end'
remote.host = '10.1.1.2'




pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                script{
                    remote.user='amarnathperecharla'
                }
                echo 'Hello World'
            }
        }
    }
}



pipeline {
    agent any
    stages {
    stage('ssh-agent') {
        steps{
            sshagent (credentials: ['google-compute-key-id']) {
                sh """
                    ssh -o StrictHostKeyChecking=no amarnathperecharla@10.1.1.2 'ls && cd personal/ && git pull && docker build -t personal . && docker stop personal && docker rm personal && docker run -d -p 10.1.1.2:80:80 --name personal personal'
                    
                    
                    EOF
                """
                }
            }
        }
    }

}




pipeline {
    agent any

    environment {
        REMOTE_USER = "amarnathperecharla"
        REMOTE_HOST = "10.1.1.2"
        SSH_KEY_PATH = "~/.ssh/google_compute_engine"
    }

    stages {
        stage('SSH to Remote Server') {
            steps {
                script {
                    // Use ssh-agent to load the private key and establish the SSH connection
                    sshagent(['google-compute-key-id']) {
                        sh """
                            ssh -i ${SSH_KEY_PATH} ${REMOTE_USER}@${REMOTE_HOST} << 'EOF'
                            echo "Connected to the remote server!"
                            # Run your commands here, for example:
                            uptime
                            EOF
                        """
                    }
                }
            }
        }
    }
}


