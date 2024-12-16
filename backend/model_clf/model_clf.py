import joblib
import pandas as pd


def clf(predicts):
    classification = {
        'Good': 'Bom',
        'Moderate': 'Moderado',
        'Poor': 'Ruim',
        'Hazardous': 'Perigoso'
    }

    scaler = joblib.load('scaler.pkl')
    model = joblib.load('model_clf.pkl')
    pred_df = pd.DataFrame(predicts, index=[0])
    pred_df_esc = pd.DataFrame(scaler.transform(pred_df), columns=pred_df.columns)
    predict = model.predict(pred_df_esc)[0]
    return classification[predict]


if __name__ == '__main__':
    previsores = {
        'Temperature': 27.1,
        'Humidity': 39.1,
        'PM2.5': 6.1,
        'PM10': 6.3,
        'NO2': 13.5,
        'SO2': 5.3,
        'CO': 1.15,
        'Proximity_to_Industrial_Areas': 11.1,
        'Population_Density': 551.0
    }

    print(clf(previsores))