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
                    url: "https://docs.google.com/a/nycaudubon.org/forms/d/1Q_Ehp0IecrwgQIugde1IPVZwS-ySzL3vp2DVTYGFifM/formResponse",
                    data: {
                        "entry.21279752": species,
                        "entry.1760098207": dead_or_injured,
                        "entry.1162522983": sex,
                        "entry.968826813": age,
                        "entry.1089406598": date,
                        "entry.1322686028": time,
                        "entry.1322686028": your_name,
                        "entry.1267380138": contact_info,
                        "entry.563161073": lati,
                        "entry.195156901": longi,
                        "entry.389816901": notes
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
