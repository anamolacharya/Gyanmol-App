import React from 'react';

const articles = [
    {
        name: '3D-Organ-Printing',
        title: '3D Printing tissues and Organs',

        content: [
                `With the cutting-edge advanced technology, science have developed numerous amazing discoveries. 
                3D Printing is one of the recent developed technology which is going to a sensation in coming years. 
                Combining the computer science and engineering with biology, this area of topic is very new to the world. 
                It is a technology to produce a functional and properly shaped tissue, an organ through a 3D bioprinting machine.`,

                `The idea of printing 3D complex tissues and cartilage was brought by the researchers from the University of Oxford. 
                The newer design of the 3D printing will allow researchers to produce tissues and organs with more function, accuracy, and detail. 
                The sample of the printing organ is taken from the damaged parts of the body, which replicates exactly same and will be replaced with the new artificial one. 
                University of Oxford is just an example. Industrial, manufacturing, and system engineering of Texas Tech University also has a separate department for Bio-printing. 
                Likewise, there are many universities and research companies who are actively taking part in creating new 3D organ printing technologies.`,

                `First of all, the one who discovers the new technology, either researcher, company, or Universities will be benefitted. 
                However, with the application of the newly discovered technologies will make the government benefited. 
                However, funding for the research will be necessary from the appropriate department. Overall, all of the mankind will be benefitted by the DPC of the technology. 
                However, if this technology is misused by the opposition party then, it might cause a huge problem among the the people.  `,
                
                `The concept and design of the 3D printing is very necessary to implement. 
                The concept and design from the researchers should be considered by the associated department for the further production and implementation. 
                Resect for Person will the most important ethical theories that can be implemented throughout the project. 
                Working together in an appropriate co-ordination among all the member involved is vital. 
                Proper interdisciplinary habit from everyone involved in the project makes easier to implement the DPC. 
                With many possible applications of 3D Printing in medicine, public/ society will be benefited by the DPC.`,

                `Developing new technology in the growing world will always be challenging. 
                Despite the challenges, the support from the co-researchers, public, and related members will be very crucial. 
                However, the economy is one of the problem which is against any development. 
                With the support from government in funding and encouragement, any project is possible. 
                As a concerned citizen, supporting the development of the DPC from my side as much as possible will be an appropriate manner.`

        ]

    },
    {
        name: 'Image Identification',
        title: 'Image Identification using CNN',

        content: [
                `Abstract:
                 
                Convolutional Neural Network has been applied in image classification for a long time. 
                With a better capability of joint feature, accuracy, and classifier learning, CNN is used widely used algorithms. 
                Images Identification has been hugely used in the modern era where security is most concerned. 
                Image identification is an area of Supervised learning where a special target class is set which is trained using a 
                specific model that eventually recognizes the image using labeled example photos. 
                Using the Machine Learning algorithm of CNN with built-in libraries like Keras and TensorFlow, image identification has been more feasible. 
                The primary focus will be on the layers of Convolutional Neural Network that deal with various layers 
                like Convolution layer, Pooling Layer, Drop-out Layer, Flattening layer, and Fully connected/SoftMax layer. 
                With training the model a few times, the accuracy for identifying the objects from the testing data tends to 
                increase with respect to the size of the dataset. The boundless margin of the knowledge CNN will enable to deal with identifying many other things but not just images.`,
                ` 1. Introduction`,
               ` 1.1 CNN `,
               ` In the Machine Learning World, various applications and algorithms have been introduced. 
               One of the important areas of Deep learning where the majority of the Professional consider this class as most commonly applied in analyzing visual imagery and Computer Vison-Convolutional Neural Network (CNN). 
               The concept of Convolutional Neural Network (CNN) is an ability to automatically learn a large number of filters in a parallel specific to training dataset under the constraints of a specific predictive modeling problem. 
               It is widely said that CNN needs less time and fewer parameters needed in comparison to a fully connected network. 
               The area of the usage of CNN has been so wide in recent years like Image recognition in social media, self-driving cars, Health care, Security (Bank, TSA, Governmental Agencies). The structure of the CNN model is a non-probabilistic model of multilayer perceptron. CNN extracts features from the original data dynamically in the hidden layer between the input layer and the output layer and then applies these features to the classification or fitting of the subsequent output layer [1, Sec. I]. The principal layers that are involved in the CNN model are:`,
                `- Input Layer: In general, an input layer is an initial layer where it contains the initial/raw data. For example, this layer can have an image, which can be represented by a three-dimensional matrix. These matrixes are arranged from top to bottom and can be either static or dynamic. If a model has an image with a dimension of 25 x 25, the input should be 625 x 1. And when we have multiple numbers of images (y), the input dimension for the input layer is (625, y).`,
                `- Convolutional Layer: It is commonly called the extractor layer where the special features of the dataset are extracted performing the convolutional operation. A separate portion of an image is connected to the Convolutional layer which performs the convolutional operation and calculates the dot product between a region of an input image and filter. The little image then slides through the images which becomes the input for the next layer (probably Pooling Layer).`,
                `- Pooling Layer: This layer normally occurs between two convolutional layers which adopt the method of Max over time pooling to reduce the volume of an input image the convolutional process. Moreover, it checks if there are any images under/over the threshold too. For example, a dimension of 100 x 100 image is reduced into dimension 50 x 50 as a result of this layer.`,
                `- Drop-out Layer: The use of a Drop-out layer is taken as ambiguous since it can be used on both fully connected layer and convolutional layer. In general, the main use of this layer is to drop out a random set of activations in a particular layer by setting them to zero. This helps the model during overfitting and is done during the training.`,
                `- Flattening Layer: The idea of converting the dataset (images) that is obtained from the previous layer into a one-dimensional array. Then that array can be used as an input by the coming layer-fully connected layer. For example, all pixels for the images are arranged in a single line that is connected with the final layer.`,
                `- Fully Connected and SoftMax Layer: This layer takes what convolutional and pooling later gave and uses an algorithm to figure out the data (images). This involves weights, biases, and neurons which classify the data by category [2, Sec. II]. SoftMax is the last layer of CNN where binary/multiple classifications occur.`,
                `- Output Layer: This layer is the last most layer where labels are present in the form of one hoe encoded.`,
                
               ` One of the demerits of CNN is when a fully connected network is present with a large number of inputs, the weight will be large respectively. This limits the number of neurons in the model. `,
                ` 1.2 Project Approach`,
                `The approach in this paper is to use CNN to preliminarily explore the dataset provided and learn out the images are, 
                which later provides a recommendation/prediction of a test data using the knowledge based on the training dataset. 
                During an initial phase, a smaller number of data set is initialized and trained to identify the fixed number of objects (testing data) 
                based on the training data set. During the operation, multiple layers take part on the CNN which will be included in the methodology. 
                CNN as a pioneer feature to identify any objects is implemented on this project to recognize few objects.`,
                `1.3 Image Identification`,
                `Image identification is an area of Supervised learning where a special target class is set which is trained using a 
                specific model that eventually recognizes the image using labeled example photos. The position of an image, the background behind the image, 
                ambient lighting, camera angle, and camera focus for an image can create a fluctuation in raw pixel data[4, Sec. IV]. 
                These detailed properties of an image might be a reason where the probability of the recognition is not 100 percent in the real world. 
                CNN is widely used in Image Identification to determine whether the image is the right one or the wrong one.`,
                `1.4 Project Approach`,
                `The approach of Image Identification in this project is using CNN which is described above. 
                The general concept for this project is that the model takes an Input (image), outputs a class (suppose car). 
                Also gives the probability of that class being a car (Suppose 90%). 
                Then, Analyze the result provided and make a claim based on the Model. 
                The identification work for the following basis described above: the position of an image, the background behind the image, 
                ambient lighting, camera angle, and camera focus for an image. In a real-world scenario, 
                the simple way to understand would be a bike with two tires which contrasts with 4 big tires in a car.`,
                `2. Methodology`,
                `The use of datasets in this project is mostly quantitative where a fixed number of datasets is taken for an initial trial. 
                With the success of the initial trial, an expanded version can be implemented using the same model. 
                The dataset(images) that the project using is secondary data that was already collected and have been reused. 
                The collection of the image was taken through the internet to train and test the model. 
                Moreover, this project primarily focuses on experimental methods where a model is implemented through CNN using TensorFlow and Keras. 
                However, the detailed knowledge of CNN and its layers will be absolutely necessary for a better understanding.`,
                `2.1 Analyze Data`,
                `For this project, a total of 18 images were downloaded from the internet where 6 were planes, 6 were cars, 6 were bikes. 
                Each image of different categories was of different size, color, angle, background. 
                Their color for all the cars was different. Similarly, the colors for the bikes were also different and their structure was also different. 
                The reason for making the images for the same categories different is to make the recognition model more accurate and précised. 
                The rest of the 3 images were used to test the data separately. In this initial phase, the testing data for the model are similar to the training data. 
                That would be a concern to expand the variety of the objects and the feature to make the Image recognition model livelier.`,
                
                `2.2 Data Processing`,
                `Data processing is one of the huge/important elements of machine learning and data science. 
                Raw data are collected and are translated into a usable form of information. 
                The series of steps involved while preparing the dataset for analysis can be collecting data, cleaning and organizing data, 
                training model, exploratory data analysis, refining model, and some miscellaneous steps. 
                Data engineering and Feature engineering come under Data Processing where Data engineering is the process of converting raw data into prepared data. 
                Feature engineering then tunes the prepared data to create the features expected by the ML model [5, Sec. V ]. 
                The raw data may be in any form and they are interpreted to make prepared data, 
                where many changes can be made like change in each row in the data set that represents a unique customer at Supermarket.`,

                `In this project, despite having less number of images in the dataset, data processing was absolutely necessary. 
                In the CNN model, pixel intensity and change in the pixel value of the image are some of the important topics that need to be taken care of. 
                With the dataset available for the project, the pixel intensity for all the images was different from each other. 
                Being raw data like that, it needed to be fixed before training the model. 
                Resizing the image with a constant pixel and size for all of the images was necessary. 
                For loop was performed to change the pixel of all the images to 120 x 120, which made all the image quality uniform. 
                An instance of the code implemented in R is given below:`,
                `for (i in 1:15) {train[[i]] <- resize(train[[i]], 120, 120)}`,
                `for (i in 1:3) {test[[i]] <- resize(test[[i]], 120, 120)}`,
                `Moreover, the dimension for all the images were also reordered to make sure that it won’t have issues while training the data. 
                An instance of the code implemented in R is given below:`,
                `
                train <- aperm(train, c(4, 1, 2, 3))`,
                `test <- aperm(test, c(4, 1, 2, 3))`,
                `The given figure below is a pixel histogram of a single image. 
                Here, the Intensity value on the x-axis close to 0 is darker, and closer to 1.5 is lighter. 
                All the images were analyzed the same way before training into the model. 
                The organized data was stored in the console and was ready for setting up the model.`,

                `3. Implementation`,
                `After the data are processed/organized, the implementation of the model should begin. 
                For this project, Keras and TensorFlow were used to implement CNN. 
                TensorFlow is an end-to-end open-source platform for machine learning which can perform various tasks. 
                One of the tasks that TensorFlow can perform is to create CNN which can classify images in the dataset following the CNN layering steps. 
                Keras is a high-level neural network library that is running on top of TensorFlow and other tools [6, Sec. VI]. 
                Keras and TensorFlow were implemented in the project by installing the package in R-studio. 
                The libraries that were used to implement the CNN are given below in R language.`,
                `library(keras)
                library(EBImage)
                library(tensorflow)`,
               ` With several values to be specified in order to parameterize the convolution and pooling stages. 
               For example, in this project, an image had 100 filters using a 3x3 window for the convolutional
                layer while the pooling layer had a 2 x 2 window. 
                The input size for each image was (100, 100, 1) in the initial layering of CNN.`,
                `3.1 Model Setup`,
                `Model setup in this project primarily focuses on the layers of Convolutional Neural Network that deal with various layers like Convolution layer, 
                Pooling Layer, Drop-out Layer, Flattening layer, and Fully connected/SoftMax layer. 
                One of the most important activation functions has been used while training the model-ReLU. 
                The rectified linear activation function or ReLU for short is a piecewise linear function that will output the input directly if it is positive, 
                otherwise, it will output zero [7, Sec. VII]. Since it is easier to train and achieves better performance, this model uses ReLU. 
                The convolutional layer initially starts with 32 filters with the input shape of 100 x 100. The kernel size of the layer is 3 x 3. 
                Similarly, in the pooling layer, the pool size becomes 2 x 2. Then, again convolution layer is laid where the filters increase to 64 with kernel size 3x 3. 
                RelU is used in almost all layers performed in the model. 
                The given figure below represents the summary of the CNN layers with the filters, kernel sizes, input shapes, activation, and parameters, respectively.`,

                `Moreover, the model also deals with a special function- categorical cross-entropy- 
                which deals with probabilistic losses in Keras. 
                Decay, momentum, and accuracy are also calculated by the model at the end of the training. 
                With all these layering and functions, the model is set up and ready for the prediction and testing of the data. 
                The following line of R code is used to test data to recognize the images.`,
                `model %>% evaluate(test, testLabels)`,
                `pred <- model %>% -predict_classes(test)`,
                `table(Predicted = pred, Actual = testy)`,
                
                `4. Result`,
                `While Dealing with the Machine Learning principle, Prediction is a huge part that any professional needs to deals with. 
                Not every time the prediction goes correct since it is a matter of intense learning and probability together. 
                Prediction can be frustrating so many times if the model is not constructed properly, or the model might need to be trained first to predict properly. 
                In this scenario, the accuracy of the prediction of the testing image was 33 % which is very low. 
                The model was successfully able to predict the object in the image with an accuracy of 100% a few times too.
                 With training the model a few times, the accuracy for identifying the objects from the testing data tends to be increasing with an average of around 85%. 
                 The summary and plot below describe the performance evaluation that deals with the accuracy, loss for the prediction for training, and validation of the model.`,
                
                `In the above summary chart, various data can be seen where each trail has different accuracy, loss, validation. 
                For example, A loss of 66.2% and accuracy of 83.3 percent is seen during the middle steps of training. 
                However, the final step has a loss of 20.06% and training accuracy of 100%.`,
               `5. Discussion`,
                `A famous quote from Robinson Cano, “You never stop Learning. 
                You learn something new every day.”. 
                Concerning the given quote, learning Machine learning is like diving in the ocean where there is an infinity of knowledge to gain. 
                In this project, with the available data set, multiple things can be learned and improvised further better. 
                With being able to identify the objects with high accuracy, this project can be expanded to a bigger version where there can be many objects and 
                thousands of images as a training dataset. Training just 15 images to recognize the images can me motivation to anyone willing to go furthermore. 
                The use of all layers of Convolutional Neural network not only deals with the filter size but also grows the network incrementally and hierarchically.`,
                `6. Conclusion`,
                `With a précised demonstration of recognizing an image using the feature of Convolutional Neural Network 
                shows how an image can be processed through the layers dealing with dimensions, filters, and kernel sizes. 
                Moreover, the transferability gap of the layers grows as the distance between tasks increases, particularly when transferring higher layers. 
                The approach to use CNN to preliminarily explore the dataset provided and learn out the images are, which later provides a 
                recommendation/prediction of a test data using the knowledge based on the training dataset was successful with an average of 85%. 
                Using libraries like Keras and TensorFlow, it was possible to implement CNN for proper image identification. Referring to multiple pieces of research, 
                image recognition is considered as the pioneering feature in Convolutional Neural Network. 
                However, the boundless margin of this knowledge will enable us to deal with identifying many other things but not just images only.`,
                `Acknowledgment`,
                `I would like to acknowledge Professor Abdul Serwadda, Texas Tech University with thorough support during this project.`,
                
                `References`,
                `[1] Yan, Y., Yu, G. and Yan, X. (2020) ‘Online Doctor Recommendation with Convolutional Neural Network and Sparse Inputs’, 
                Computational Intelligence & Neuroscience, pp. 1–10. doi: 10.1155/2020/8826557.`,
                `[2] J. Jeong. “The Most Intuitive and Easiest Guide for Convolutional Neural Network” Towards Data Science. https://towardsdatascience.com/the-most-intuitive-and-easiest-guide-for-convolutional-neural-network-3607be47480 (accessed December 5, 2020).`,
                `[3] J. Gua, Z. Wang (2017) ‘Recent Advances in Convolutional Neural Networks’`,
                `[4] “ML Practicum: Image Classification” Google. https://developers.google.com/machine-learning/practica/image-classification (accessed December 5, 2020).`,
                `[5] “Data preprocessing for machine learning: options and recommendations” Google. https://cloud.google.com/solutions/machine-learning/data-preprocessing-for-ml-with-tf-transform-pt1 (accessed December 5, 2020).`,
                `[6] A. Choudhury. “TensorFlow vs Keras: Which One Should You Choose” Analytic India Mag. https://analyticsindiamag.com/tensorflow-vs-keras-which-one-should-you-choose. (accessed December 5, 2020).`,
                `[7] J. Brownlee. “A Gentle Introduction to the Rectified Linear Unit (ReLU)” Machine Learning Mastery. https://machinelearningmastery.com/rectified-linear-activation-function-for-deep-learning-neural-networks/ (accessed December 5, 2020).`,
                `[8] J. Yosinski, J. Clune, Y. Bengio, and H. Lipson “How transferable are features in deep neural networks?” `]
    },
];
export default articles;