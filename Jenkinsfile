pipeline {
  agent any
  stages {
    stage("build") {
      steps {
        echo "building the docker image..."
        withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', passwordVariable: 'DOCKER_PWD', usernameVariable: 'DOCKER_USER')]) {
          sh '''
            echo "${DOCKER_PWD}" | docker login -u "${DOCKER_USER}" --password-stdin
            docker build -t aaronhyl/devops:0.0.1 . 
            docker push aaronhyl/devops:0.0.1
          '''
        }
      }
    }
  }

  post {
    always {
        // always execute after all stages are finished
        echo "always fire"
    }

    success {
      // if all stages are succeed
        echo "fire if success"
    }

    failure {
      // if some stages failed
      echo "fire if failed"
    }
  }
}
