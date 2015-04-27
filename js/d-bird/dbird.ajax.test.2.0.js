            function postToGoogle() {
                var species = $('select#species option:selected').val();
                var dead_or_injured = $("input[type='radio'][name='dead_or_injured']:checked").val();
                var sex = $("input[type='radio'][name='sex']:checked").val();
                var age = $("input[type='radio'][name='age']:checked").val();
                var date = $('#Date').val();
                var time = $('#Time').val();
                var your_name = $('#Your_Name').val();
                var contact_info = $('#Contact_Info').val();
                var lati = $('#Lati').val();
                var longi = $('#Longi').val();
                var notes = $("textarea#Notes").val();

                $.ajax({
                    url: "https://docs.google.com/forms/d/1VE-LA4e3cZFmsEmFnfIAluluLpfAGi9TTMSMbmF6n9Y/formResponse",
                    data: {
                        "entry.877261230": species,
                        "entry.642129870": dead_or_injured,
                        "entry.1812955822": sex,
                        "entry.347479321": age,
                        "entry.885031573": date,
                        "entry.1258116242": time,
                        "entry.484942320": your_name,
                        "entry.123994772": contact_info,
                        "entry.514353857": lati,
                        "entry.850967541": longi,
                        "entry.1523226474": notes
                        },
                    type: "POST",
                    dataType: "xml",
                    statusCode: {
                        0: function() {
                            //Success message
                        },
                        200: function() {
                            //Success Message
                        }
                    }
                });
            }


            $(document).ready(function(){
                $('#hello').submit(function() {
                    postToGoogle();
//                    return false;
                });
            });
