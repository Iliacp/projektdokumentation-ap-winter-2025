# Beschreibung 

Eine LaTeX-Vorlage für die Dokumentation der Projektarbeit (Ausbildung Fachinformatiker Anwendungsentwicklung). 
Die Formatierung entspricht dabei den Anforderungen der IHK Nürnberg laut: https://www.ihk-nuernberg.de/de/media/PDF/Berufsbildung/Berufeindex-A-Z/merkblatt-fachinformatiker-neue-vo-.pdf

Zudem sind übliche Element wie beispielsweise Abbildungen, Tabellen, Quellenangaben, mathematische Formeln und Quellcodeausschnitte enthalten, um deren Syntax und Verwendung aufzuzeigen. Durch Kommentare im LaTeX-Code werden komplexere Konstrukte näher erklärt.

# Erläuterung der Projektstruktur

## bib/sample.bib
Die Bibliografie-Datei, die verwendet wird, um Literaturverweise in einem LaTeX-Dokument zu erstellen. Sie enthält die Informationen über die Quellen, auf die im Dokument verwiesen wird(beispielsweise Autorenname, Titel des Artikels, Buch oder Zeitschrift, Veröffentlichungsjahr, Verlag oder Herausgeber usw.)

Die .bib-Datei wird normalerweise mit einem BibTeX-Programm bearbeitet, das eine spezielle Syntax verwendet, um die Informationen in der Datei zu strukturieren. 

Innerhalb des LaTeX-Dokuments können Verweise auf die Quellen durch Verwendung spezieller Befehle und Referenzschlüssel erstellt werden, die in der .bib-Datei definiert sind. Durch Verwendung dieser Befehle können automatisch nummerierte Verweise im Text und eine formatierte Bibliografie am Ende des Dokuments erstellt werden.

## code
Zur besseren Übersichtlichkeit sind Quellcodedateien in diesem Verzeichnis abgelegt. Sie können im Dokument durch spezielle Befehle eingebunden und formatiert werden.

## figures
In diesem Verzeichnis sind Diagramme und Grafiken abgelegt, die im Dokument verwendet werden.

## sections
Zur besseren Übersichtlichkeit enthält dieses Verzeichnis einzelne Dateien zu den jeweiligen Kapiteln im Dokument. Diese werden in der main.tex eingebunden.

## main.tex
In der main.tex Datei werden die grundlegenden Einstellungen des Dokuments festgelegt, wie z. B. der Dokumenttyp (Artikel, Buch, Bericht usw.), die verwendete Dokumentenklasse, die Verwendung von Paketen und die Definition von Titelseite, Inhaltsverzeichnis und Formatierung des Dokuments.

In der main.tex Datei werden auch andere Teildateien des Dokuments eingebunden, die den tatsächlichen Inhalt des Dokuments enthalten. Diese Teildateien können beispielsweise Kapitel, Abschnitte oder Referenzdateien sein, die die Bibliografie des Dokuments enthalten.

## glossary.tex
Hier sind die Begriffe und Abkürzungen definiert, die im Dokument verwendet werden. Diese können im Text durch ihren jeweiligen Befehl eingebunden werden. Das Glossar wird direkt nach der Inhaltsangabe eingefügt.

## metadata.tex
In der metadata.tex Datei sind die Metadaten wie den Titel des Dokuments, den Autor, das Veröffentlichungsdatum und ähnliche Informationen enthalten. Diese können im Dokument durch ihren jeweiligen Befehl eingebunden werden. Sie dienen dazu, grundlegende Informationen, die ggf. an unterschiedlichen Stellen im Dokument auftauchen, in einer zentralen Stelle verwalten zu können.