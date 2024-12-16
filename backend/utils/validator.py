from utils.message import message_err


def validator_data(data, key):
    try:
        return float(data[key])
    except KeyError:
        return ''
    except ValueError:
        return ''

def append_error(list_err: list, input_js, input_name):
    if input_js == '':
        list_err.append(message_err(input_name))