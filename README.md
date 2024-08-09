# Cancer & COVID Detection via CNN  
> A comprehensive computer vision project aimed at detecting cancer and COVID-19 from X-ray images, developed as part of a Data Science project at the University of Wollongong in Dubai.

> The core of the project involves the use of Convolutional Neural Networks (CNNs) to accurately classify X-ray images into categories such as cancerous, COVID-affected, or normal.

> The CNN model was trained on a diverse dataset of X-ray images, leveraging the power of deep learning to identify subtle patterns and anomalies that indicate the presence of disease.

> In addition to the model development, this project was transformed into a fully functional web application using HTML, CSS, and JavaScript. The application allows users to upload an X-ray image and receive an instant prediction about the presence of cancer, COVID-19, or a normal diagnosis.

> Extensive model evaluation was performed, ensuring high accuracy and reliability in detecting these critical conditions from X-ray images.

> The web application was developed using Flask, and it runs locally, offering users the ability to interact with the model on their own machines.

## Design Process and Methods  
> **Data Collection and Preprocessing:**  
> - A comprehensive dataset of X-ray images was collected, including samples of normal lungs, COVID-19 affected lungs, and lungs with cancerous growths.  
> - Preprocessing steps included resizing images, normalization, and data augmentation techniques like rotation and flipping to enhance model robustness.

> **Convolutional Neural Network (CNN):**  
> - A CNN architecture was designed and fine-tuned for this specific classification task.  
> - The network consisted of multiple convolutional layers, pooling layers, and fully connected layers, optimized to detect and differentiate between various medical conditions from X-ray images.  
> - The model was trained using advanced techniques like dropout and batch normalization to prevent overfitting and improve generalization.

> **Model Evaluation:**  
> - The CNN model was evaluated using metrics such as accuracy, precision, recall, and F1-score.  
> - Cross-validation techniques were employed to ensure the model’s performance was consistent across different subsets of the data.  
> - Confusion matrices and ROC curves were used to visually interpret the model's predictive capabilities and to fine-tune its parameters.

> **Web Application Development:**  
> - The CNN model was integrated into a local web application using Flask, enabling real-time predictions.  
> - The frontend was developed using HTML, CSS, and JavaScript, ensuring a responsive and user-friendly interface.  
> - Users can upload an X-ray image via the web interface, and the model processes the image on the local server to deliver an instant prediction.

> **Deployment:**  
> - The web application was designed to run locally on the user's machine using Flask, providing a simple yet effective interface for making predictions.  
> - The application is easy to set up and requires minimal technical knowledge, making it accessible to a wide audience.

> **Results and Impact:**  
> - The CNN model achieved high accuracy in detecting cancer and COVID-19 from X-ray images, offering a reliable tool for early diagnosis.  
> - The locally hosted web application provides a practical solution for users to quickly assess their X-ray images for potential medical conditions in a secure and private environment.
