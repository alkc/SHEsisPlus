#CXXFLAGS =	 -O0  -g -Wall -fmessage-length=0  -L/home/ada/git/SHEsis/boost/boost_1_55_0/stage/lib -I/home/ada/git/SHEsis/boost/boost_1_55_0
CXXFLAGS =	-O0 -g -Wall -fmessage-length=0  -L/results/software/boost_1_55_0/stage/lib -I/results/software/boost_1_55_0/ 
 
LIBS =
TARGET = SHEsis SHEsisData_test AssociationTest_test HWETest_test 
OBJS = SHEsisData.o main.o SHEsisData_test.o utility.o fisher.o AssociationTest.o AssociationTest_test.o \
HWETest.o  HWETest_test.o Haplotype.o


all:	SHEsis SHEsisData_test AssociationTest_test Haplotype_test# HWETest_test

SHEsis:	 main.o  SHEsisData.o fisher.o utility.o AssociationTest.o
	$(CXX) -o SHEsis SHEsisData.o main.o $(LIBS)

SHEsisData_test: SHEsisData.o SHEsisData_test.o utility.o
	$(CXX) -o  SHEsisData_test SHEsisData.o SHEsisData_test.o $(LIBS)

AssociationTest_test: SHEsisData.o utility.o fisher.o AssociationTest.o AssociationTest_test.o 
	$(CXX) -o AssociationTest_test SHEsisData.o utility.o fisher.o AssociationTest.o AssociationTest_test.o $(LIBS)

#HWETest_test: SHEsisData.o utility.o fisher.o HWETest.o HWETest_test.o 
#	$(CXX) -o HWETest_test SHEsisData.o utility.o fisher.o HWETest.o HWETest_test.o $(LIBS)

Haplotype_test: SHEsisData.o    Haplotype_test.o  utility.o Haplotype.o IndexingVariables.o ArrayStorage.o
	$(CXX) -o Haplotype_test SHEsisData.o    Haplotype_test.o  utility.o Haplotype.o IndexingVariables.o ArrayStorage.o
#Haplotype.o: Haplotype.cpp Haplotype.h utility.h 
#	$(CXX) -o Haplotype.o Haplotype.cpp Haplotype.h utility.h
#	




clean:
	rm -f $(OBJS) $(TARGET)
